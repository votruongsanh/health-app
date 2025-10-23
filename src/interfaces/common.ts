export type ISODate = string; // e.g. 2021-05-21

export interface Page<T> {
  page: number;
  totalPages: number;
  items: T[];
}

export interface BodyPoint {
  x: string; // chart axis label
  weight: number; // kg
  bodyFat: number; // %
}
