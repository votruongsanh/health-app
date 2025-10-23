import type { ISODate } from "@/interfaces/common";

export interface Achievement {
  date: ISODate;
  percent: number; // 0..100
}

export interface MealItem {
  id: number;
  dateLabel: string; // e.g. 05.21 Morning
  kind: "morning" | "lunch" | "dinner" | "snack";
}
