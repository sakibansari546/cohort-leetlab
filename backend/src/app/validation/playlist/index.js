import { z } from "zod";

const createPlaylistSchema = z.object({
  name: z
    .string({ message: "Playlist name must be string" })
    .nonempty({ message: "Playlist name is required" })
    .min(5, { message: "Playlist name must be at least 5 characters long" })
    .max(30, { message: "Playlist name must not exceed 30 characters" }),

  description: z.optional(
    z
      .string({ message: "Description must be string" })
      .nonempty({ message: "Description is required" })
      .max(200, { message: "Description must not exceed 200 characters" })
  ),
});

export { createPlaylistSchema };
