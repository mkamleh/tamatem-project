export interface IPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface IGetAllRequest {
  page?: number;
  size?: number;
  query?: string;
}
