/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[basicInfoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "basicInfoId" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL,
    "website" TEXT,
    "twitter" TEXT,
    "github" TEXT,
    "linkedIn" TEXT,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasicInfo" (
    "id" TEXT NOT NULL,
    "gender" "Gender",
    "bio" TEXT,
    "socialId" TEXT,

    CONSTRAINT "BasicInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BasicInfo_socialId_key" ON "BasicInfo"("socialId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_basicInfoId_key" ON "User"("basicInfoId");

-- AddForeignKey
ALTER TABLE "BasicInfo" ADD CONSTRAINT "BasicInfo_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "Social"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_basicInfoId_fkey" FOREIGN KEY ("basicInfoId") REFERENCES "BasicInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
