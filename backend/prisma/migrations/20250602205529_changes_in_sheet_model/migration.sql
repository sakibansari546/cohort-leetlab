/*
  Warnings:

  - You are about to drop the column `language` on the `Sheet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "language",
ADD COLUMN     "languages" TEXT[];
