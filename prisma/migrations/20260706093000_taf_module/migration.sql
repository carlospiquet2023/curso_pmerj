-- CreateEnum
CREATE TYPE "TafExerciseType" AS ENUM ('CORRIDA', 'FLEXAO', 'ABDOMINAL', 'FORCA_COMPLEMENTAR');

-- CreateEnum
CREATE TYPE "TafChecklistKind" AS ENUM ('DOCUMENTO', 'EXAME', 'ETAPA');

-- CreateEnum
CREATE TYPE "TafChecklistStatus" AS ENUM ('PENDENTE', 'EM_ANALISE', 'CONCLUIDO', 'VENCIDO', 'NAO_SE_APLICA');

-- CreateEnum
CREATE TYPE "TafSimulationStatus" AS ENUM ('APROVADO', 'ATENCAO', 'INSUFICIENTE');

-- CreateEnum
CREATE TYPE "TafPlanTaskStatus" AS ENUM ('PENDENTE', 'CONCLUIDO', 'NAO_FEITO', 'PARCIAL', 'DOR', 'AJUSTAR');

-- CreateTable
CREATE TABLE "TafTrainingLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseType" "TafExerciseType" NOT NULL,
    "trainedAt" TIMESTAMP(3) NOT NULL,
    "distanceMeters" INTEGER,
    "durationSeconds" INTEGER,
    "paceSecondsPerKm" INTEGER,
    "perceivedEffort" INTEGER,
    "pain" BOOLEAN NOT NULL DEFAULT false,
    "painLocation" TEXT,
    "repetitions" INTEGER,
    "sets" INTEGER,
    "restSeconds" INTEGER,
    "controlledExecution" BOOLEAN,
    "cadence" TEXT,
    "complementaryExercise" TEXT,
    "loadKg" DOUBLE PRECISION,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TafTrainingLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafHealthSnapshot" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "doctorEvaluationDone" BOOLEAN NOT NULL DEFAULT false,
    "doctorEvaluationAt" TIMESTAMP(3),
    "hasLimitation" BOOLEAN NOT NULL DEFAULT false,
    "hasPain" BOOLEAN NOT NULL DEFAULT false,
    "painLocation" TEXT,
    "sleepHours" DOUBLE PRECISION,
    "weightKg" DOUBLE PRECISION,
    "heightCm" DOUBLE PRECISION,
    "bmi" DOUBLE PRECISION,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TafHealthSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafSimulation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "simulatedAt" TIMESTAMP(3) NOT NULL,
    "exerciseOrder" TEXT NOT NULL,
    "runDistanceMeters" INTEGER,
    "runDurationSeconds" INTEGER,
    "pushups" INTEGER,
    "situps" INTEGER,
    "pullups" INTEGER,
    "complementaryResult" TEXT,
    "restSeconds" INTEGER,
    "finalStatus" "TafSimulationStatus" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TafSimulation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafChecklistTemplate" (
    "id" TEXT NOT NULL,
    "kind" "TafChecklistKind" NOT NULL,
    "title" TEXT NOT NULL,
    "guidance" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "dueDaysAfterExam" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TafChecklistTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafChecklistItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT,
    "kind" "TafChecklistKind" NOT NULL,
    "title" TEXT NOT NULL,
    "status" "TafChecklistStatus" NOT NULL DEFAULT 'PENDENTE',
    "issuedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "fileName" TEXT,
    "filePath" TEXT,
    "notes" TEXT,
    "guidance" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TafChecklistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafPlanTask" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scheduledFor" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "status" "TafPlanTaskStatus" NOT NULL DEFAULT 'PENDENTE',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TafPlanTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafExerciseRequirement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "exerciseType" "TafExerciseType" NOT NULL,
    "minMale" DOUBLE PRECISION,
    "minFemale" DOUBLE PRECISION,
    "unit" TEXT NOT NULL DEFAULT 'repeticoes',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TafExerciseRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TafOfficialNotice" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TafOfficialNotice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TafTrainingLog_userId_exerciseType_trainedAt_idx" ON "TafTrainingLog"("userId", "exerciseType", "trainedAt");

-- CreateIndex
CREATE INDEX "TafHealthSnapshot_userId_createdAt_idx" ON "TafHealthSnapshot"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "TafSimulation_userId_simulatedAt_idx" ON "TafSimulation"("userId", "simulatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "TafChecklistTemplate_kind_title_key" ON "TafChecklistTemplate"("kind", "title");

-- CreateIndex
CREATE UNIQUE INDEX "TafChecklistItem_userId_title_kind_key" ON "TafChecklistItem"("userId", "title", "kind");

-- CreateIndex
CREATE INDEX "TafChecklistItem_userId_status_idx" ON "TafChecklistItem"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "TafPlanTask_userId_scheduledFor_title_key" ON "TafPlanTask"("userId", "scheduledFor", "title");

-- CreateIndex
CREATE INDEX "TafPlanTask_userId_scheduledFor_idx" ON "TafPlanTask"("userId", "scheduledFor");

-- AddForeignKey
ALTER TABLE "TafTrainingLog" ADD CONSTRAINT "TafTrainingLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TafHealthSnapshot" ADD CONSTRAINT "TafHealthSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TafSimulation" ADD CONSTRAINT "TafSimulation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TafChecklistItem" ADD CONSTRAINT "TafChecklistItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TafChecklistItem" ADD CONSTRAINT "TafChecklistItem_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TafChecklistTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TafPlanTask" ADD CONSTRAINT "TafPlanTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
