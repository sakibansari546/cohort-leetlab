/*
  Warnings:

  - The `bio` column on the `BasicInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BasicInfo" DROP COLUMN "bio",
ADD COLUMN     "bio" TIMESTAMP(3);
