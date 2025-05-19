-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProblemInPlaylist" DROP CONSTRAINT "ProblemInPlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "ProblemInPlaylist" DROP CONSTRAINT "ProblemInPlaylist_problemId_fkey";

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
