-- DropForeignKey
ALTER TABLE "SolvedProblem" DROP CONSTRAINT "SolvedProblem_problemId_fkey";

-- DropForeignKey
ALTER TABLE "SolvedProblem" DROP CONSTRAINT "SolvedProblem_userId_fkey";

-- AddForeignKey
ALTER TABLE "SolvedProblem" ADD CONSTRAINT "SolvedProblem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolvedProblem" ADD CONSTRAINT "SolvedProblem_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
