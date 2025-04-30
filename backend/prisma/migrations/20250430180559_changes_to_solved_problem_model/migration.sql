/*
  Warnings:

  - A unique constraint covering the columns `[userId,problemId]` on the table `SolvedProblem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SolvedProblem_userId_problemId_key" ON "SolvedProblem"("userId", "problemId");
