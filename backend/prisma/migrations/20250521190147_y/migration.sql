/*
  Warnings:

  - The `birth` column on the `BasicInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BasicInfo" DROP COLUMN "birth",
ADD COLUMN     "birth" TIMESTAMP(3),
ALTER COLUMN "bio" SET DATA TYPE TEXT;
