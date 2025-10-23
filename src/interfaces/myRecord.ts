import type { ISODate } from "@/interfaces/common";

export interface ExerciseItem {
  id: number;
  name: string;
  minutes: number;
  kcal: number;
}

export interface DiaryItem {
  id: number;
  date: ISODate;
  time: string; // HH:mm
  content: string;
}
