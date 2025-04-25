import { logger } from "../../libs/logger.js";

function AsyncHandler(requestrHandler) {
  return (req, res, next) => {
    Promise.resolve(requestrHandler(req, res, next)).catch((err) => {
      logger.error(`Error - ${err}`);
      next(err);
    });
  };
}
export default AsyncHandler;
