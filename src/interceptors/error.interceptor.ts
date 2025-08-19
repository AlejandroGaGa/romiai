import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Request } from 'express';
import { ErrorResponse, CustomError } from './interfaces/error_response.interface';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ErrorResponse> {
    const request = context.switchToHttp().getRequest<Request>();
    const { url, method } = request;

    return next.handle().pipe(
      catchError((error: CustomError): Observable<ErrorResponse> => {
        const response: ErrorResponse = {
          success: false,
          message: error.message || 'Error interno del servidor',
          error: {
            code: this.getErrorCode(error),
            status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            timestamp: new Date().toISOString(),
          },
          metadata: {
            path: url || '',
            method: method?.toUpperCase() || 'UNKNOWN',
            timestamp: new Date().toISOString(),
          },
        };

        const httpException = new HttpException(
          response,
          error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );

        return throwError(() => httpException);
      }),
    ) as Observable<ErrorResponse>;
  }

  private getErrorCode(error: CustomError): string {
    if (error.code) return error.code;

    switch (error.status) {
      case HttpStatus.BAD_REQUEST:
        return 'BAD_REQUEST';
      case HttpStatus.UNAUTHORIZED:
        return 'UNAUTHORIZED';
      case HttpStatus.FORBIDDEN:
        return 'FORBIDDEN';
      case HttpStatus.NOT_FOUND:
        return 'NOT_FOUND';
      case HttpStatus.CONFLICT:
        return 'CONFLICT';
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return 'VALIDATION_ERROR';
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return 'INTERNAL_SERVER_ERROR';
      default:
        return 'UNKNOWN_ERROR';
    }
  }
}