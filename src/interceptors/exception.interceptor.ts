import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const formattedMessage =
      typeof message === 'string'
        ? message
        : (message as { message: string }).message || 'Error desconocido';

    response.status(status).json({
      success: false,
      message: formattedMessage,
      error: {
        code: status,
        details: exception instanceof Error ? exception.message : message,
      },
      metadata: {
        path: request.url,
        method: request.method,
        timestamp: new Date().toISOString(),
      },
    });
  }
}
