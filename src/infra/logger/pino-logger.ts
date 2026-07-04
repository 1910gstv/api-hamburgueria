import pino from "pino";
import { ILogger } from "../../application/interfaces/Ilogger";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export class PinoLogger implements ILogger {
  info(message: string, data?: unknown): void {
    logger.info(data, message);
  }

  debug(message: string, data?: unknown): void {
    logger.debug(data, message);
  }

  warn(message: string, data?: unknown): void {
    logger.warn(data, message);
  }

  error(message: string, data?: unknown): void {
    logger.error(data, message);
  }
}
