import { SignJWT, jwtVerify } from "jose";
import type { JWTPayload } from "jose";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "pmerj_super_secret_key_2026_dev";
const encodedKey = new TextEncoder().encode(JWT_SECRET);

function validateSecret() {
  // Ignora validação durante o build do Next.js
  if (process.env.npm_lifecycle_event === "build") return;
  if (process.env.NODE_ENV === "production" && (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 10)) {
    throw new Error("JWT_SECRET environment variable is missing or too weak in production.");
  }
}

export interface SessionPayload extends JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export async function encrypt(payload: SessionPayload) {
  validateSecret();
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  validateSecret();
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function createSession(userId: string, email: string, role: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, email, role });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// Helper para pegar o usuário atual nos Server Components
export async function getCurrentUser() {
  const session = await getSession();
  if (!session?.email) {
    return null;
  }
  
  const user = await prisma.user.findUnique({
    where: { email: session.email },
  });

  return user;
}
