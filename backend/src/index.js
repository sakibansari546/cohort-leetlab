import http from "http";

import { env } from "./libs/env.js";
import { logger } from "./libs/logger.js";
import { createExpressApp } from "./app/index.js";

async function main() {
  try {
    const PORT = env.PORT ?? 3000;
    const server = http.createServer(createExpressApp());
    server.listen(PORT, () => {
      logger.info(`Server is running on port : ${PORT}`);
    });
  } catch (error) {
    logger.error(`Error starting server ${error}`);
  }
}

main();
