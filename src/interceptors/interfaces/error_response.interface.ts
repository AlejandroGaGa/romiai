export interface ErrorResponse {
  success: boolean;
  message: string;
  error: {
    code: string;
    status: number;
    timestamp: string;
  };
  metadata: {
    path: string;
    method: string;
    timestamp: string;
  };
}

export interface CustomError extends Error {
  status?: number;
  code?: string;
}