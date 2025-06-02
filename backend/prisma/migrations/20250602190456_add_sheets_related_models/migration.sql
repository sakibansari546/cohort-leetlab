-- CreateTable
CREATE TABLE "Sheet" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "language" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SheetProblem" (
    "id" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "orderIndex" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "SheetProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,
    "boughtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SheetProblem_sheetId_problemId_key" ON "SheetProblem"("sheetId", "problemId");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_userId_sheetId_key" ON "Purchase"("userId", "sheetId");

-- AddForeignKey
ALTER TABLE "SheetProblem" ADD CONSTRAINT "SheetProblem_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetProblem" ADD CONSTRAINT "SheetProblem_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetProblem" ADD CONSTRAINT "SheetProblem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
