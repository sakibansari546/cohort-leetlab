import express from "express";

import PlaylistController from "./controller.js";

import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new PlaylistController();

  router.post(
    "/create",
    isAuth,
    controller.createPlaylistHandler.bind(controller)
  );

  router.delete(
    "/:playlistId/delete",
    isAuth,
    controller.deletePlaylistHandler.bind(controller)
  );

  router.get(
    "/playlists",
    isAuth,
    controller.getAllPlaylistsHandler.bind(controller)
  );
  router.get(
    "/:playlistId",
    isAuth,
    controller.getPlaylistByIdHandler.bind(controller)
  );


  router.post(
    "/:playlistId/add/problem",
    isAuth,
    controller.addProblemInPlaylistHandler.bind(controller)
  );
  router.delete(
    "/:playlistId/remove/problem",
    isAuth,
    controller.removeProblemInPlaylisthandler.bind(controller)
  );

  return router;
}
