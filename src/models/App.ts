export type RequestBody<T> = {
  id: string;
  body: T;
};

export interface Response {
  id: string;
}
