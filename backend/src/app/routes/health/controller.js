import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

class HealthController {
  async healthCheckHandler(req, res) {
    try {
      const data = await prisma.user.findMany();

      res.status(200).json({
        message: "Server is Healthy",
        data: data,
      });
    } catch (error) {
      logger.error(`Error Health Check ${error}`);
    }
  }
}

export default HealthController;
