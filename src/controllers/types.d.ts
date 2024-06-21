export interface TResponse {
  data: any;
  error: {
    message: string;
    code?: string;
    status?: number;
  } | null;
}