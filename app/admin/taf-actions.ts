"use server";

import type { TafChecklistKind, TafExerciseType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LIMITS, sanitizeText, validateCuid } from "@/lib/security";

const exerciseTypes = ["CORRIDA", "FLEXAO", "ABDOMINAL", "FORCA_COMPLEMENTAR"] as const;
const checklistKinds = ["DOCUMENTO", "EXAME", "ETAPA"] as const;

async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (user.role !== "ADMIN") redirect("/aluno");
}

function text(formData: FormData, field: string, max = LIMITS.MAX_SHORT_TEXT_LENGTH) {
  return sanitizeText(formData.get(field)?.toString(), max);
}

function numberValue(formData: FormData, field: string) {
  const raw = formData.get(field)?.toString().replace(",", ".").trim();
  if (!raw) return undefined;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export async function createTafRequirement(formData: FormData) {
  await requireAdmin();

  const title = text(formData, "title");
  const exerciseType = formData.get("exerciseType")?.toString() as TafExerciseType | undefined;

  if (!title || !exerciseType || !exerciseTypes.includes(exerciseType as (typeof exerciseTypes)[number])) {
    redirect("/admin");
  }

  await prisma.tafExerciseRequirement.create({
    data: {
      title,
      exerciseType,
      minMale: numberValue(formData, "minMale"),
      minFemale: numberValue(formData, "minFemale"),
      unit: text(formData, "unit") || "repeticoes",
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH),
      active: true
    }
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function createTafChecklistTemplate(formData: FormData) {
  await requireAdmin();

  const title = text(formData, "title");
  const kind = formData.get("kind")?.toString() as TafChecklistKind | undefined;

  if (!title || !kind || !checklistKinds.includes(kind as (typeof checklistKinds)[number])) {
    redirect("/admin");
  }

  await prisma.tafChecklistTemplate.upsert({
    where: { kind_title: { kind, title } },
    update: {
      guidance: text(formData, "guidance", LIMITS.MAX_TEXT_LENGTH),
      required: formData.get("required") !== "false",
      active: true
    },
    create: {
      kind,
      title,
      guidance: text(formData, "guidance", LIMITS.MAX_TEXT_LENGTH),
      required: formData.get("required") !== "false",
      active: true
    }
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function createTafOfficialNotice(formData: FormData) {
  await requireAdmin();

  const title = text(formData, "title");
  const content = text(formData, "content", LIMITS.MAX_TEXT_LENGTH);

  if (!title || !content) {
    redirect("/admin");
  }

  await prisma.tafOfficialNotice.create({
    data: { title, content, active: true }
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function toggleTafRequirement(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id")?.toString();
  const active = formData.get("active") === "true";
  if (validateCuid(id)) {
    await prisma.tafExerciseRequirement.update({ where: { id }, data: { active } });
  }
  revalidatePath("/admin");
  redirect("/admin");
}

export async function toggleTafChecklistTemplate(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id")?.toString();
  const active = formData.get("active") === "true";
  if (validateCuid(id)) {
    await prisma.tafChecklistTemplate.update({ where: { id }, data: { active } });
  }
  revalidatePath("/admin");
  redirect("/admin");
}

export async function toggleTafNotice(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id")?.toString();
  const active = formData.get("active") === "true";
  if (validateCuid(id)) {
    await prisma.tafOfficialNotice.update({ where: { id }, data: { active } });
  }
  revalidatePath("/admin");
  redirect("/admin");
}
