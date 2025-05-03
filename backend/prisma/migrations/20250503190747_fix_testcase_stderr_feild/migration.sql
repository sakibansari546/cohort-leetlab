/*
  Warnings:

  - You are about to drop the column `etderr` on the `Testcase` table. All the data in the column will be lost.
  - Added the required column `stderr` to the `Testcase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testcase" DROP COLUMN "etderr",
ADD COLUMN     "stderr" TEXT NOT NULL;
