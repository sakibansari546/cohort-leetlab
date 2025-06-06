import express from "express";
import { checkAdmin, isAuth } from "../../middleware/auth.js";
import AdminController from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new AdminController();

  router.use(isAuth);
  router.use(checkAdmin);

  router.get("/users/count", controller.getUsersCountHandler);
  router.get("/problems/count", controller.getProblemsCountHandler);
  router.get("/playlists/count", controller.getPlaylistsCountHandler);
  router.get("/submissions/count", controller.getSubmissionsCountHandler);

  router.get("/users", controller.getUsersHandler);
  router.delete("/user/:userId/delete", controller.deleteUserhandler);

  router.get("/playlists", controller.getPlaylistsHandler);
  router.delete(
    "/playlist/:playlistId/delete",
    controller.deletePlaylistHadler
  );

  router.get("/submissions", controller.getSubmissionsHandler);
  router.delete(
    "/submission/:submissionId/delete",
    controller.deleteSubmissionHandler
  );

  return router;
}
