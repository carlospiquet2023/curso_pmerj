import { randomUUID } from "node:crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

type R2Config = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  publicUrl: string;
};

const allowedContentTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp"
]);

function getR2Config(): R2Config {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET;
  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "");

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket || !publicUrl) {
    throw new Error("Cloudflare R2 nao configurado. Defina R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET e R2_PUBLIC_URL.");
  }

  return { accountId, accessKeyId, secretAccessKey, bucket, publicUrl };
}

function extensionFor(fileName: string, contentType: string) {
  const fromName = fileName.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (fromName && ["pdf", "jpg", "jpeg", "png", "webp"].includes(fromName)) return fromName;
  if (contentType === "application/pdf") return "pdf";
  if (contentType === "image/png") return "png";
  if (contentType === "image/webp") return "webp";
  return "jpg";
}

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 120);
}

export async function uploadTafDocumentToR2({
  userId,
  file
}: {
  userId: string;
  file: File;
}) {
  const config = getR2Config();
  const contentType = file.type || "application/octet-stream";

  if (!allowedContentTypes.has(contentType)) {
    throw new Error("Tipo de arquivo nao permitido. Envie PDF, JPG, PNG ou WebP.");
  }

  const safeName = sanitizeFileName(file.name || "documento");
  const extension = extensionFor(safeName, contentType);
  const key = `pmerj/taf/${userId}/${randomUUID()}.${extension}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    }
  });

  await client.send(
    new PutObjectCommand({
      Bucket: config.bucket,
      Key: key,
      Body: bytes,
      ContentType: contentType,
      Metadata: {
        originalName: safeName,
        userId
      }
    })
  );

  return {
    fileName: safeName,
    key,
    publicUrl: `${config.publicUrl}/${key}`
  };
}
