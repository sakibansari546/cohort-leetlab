-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "isPrivate" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "company" TEXT,
ADD COLUMN     "isDemo" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
