/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BasicInfo" DROP CONSTRAINT "BasicInfo_socialId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_basicInfoId_fkey";

-- AlterTable
ALTER TABLE "BasicInfo" ADD COLUMN     "birth" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
ADD COLUMN     "profileImage" TEXT NOT NULL DEFAULT 'https://img.freepik.com/premium-vector/men-icon-trendy-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-male-portraits-group-team-adorable-guys-isolated-white-background_275421-282.jpg?w=826';

-- AddForeignKey
ALTER TABLE "BasicInfo" ADD CONSTRAINT "BasicInfo_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "Social"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_basicInfoId_fkey" FOREIGN KEY ("basicInfoId") REFERENCES "BasicInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
