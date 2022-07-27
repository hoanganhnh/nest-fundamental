import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl } = req;

    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(`${originalUrl} ${statusCode}`);
    });

    next();
  }
}
