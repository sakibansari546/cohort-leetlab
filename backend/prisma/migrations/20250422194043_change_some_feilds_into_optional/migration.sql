-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emailVerificationExpiry" DROP NOT NULL,
ALTER COLUMN "emailVerificationToken" DROP NOT NULL;
