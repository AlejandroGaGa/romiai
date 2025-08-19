import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Request } from 'express';

interface ApiResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
  metadata: {
    path: string;
    method: string;
    timestamp: string;
  };
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept<T>(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest<Request>();
    const { url, method } = request;

    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        message: (data as { message: string })?.message || 'Operación exitosa',
        data: (data as { data: T })?.data ?? data,
        metadata: {
          path: url || '',
          method: method?.toUpperCase() || 'UNKNOWN',
          timestamp: new Date().toISOString(),
        },
      })),
    );
  }
}
