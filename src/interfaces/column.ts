import type { ISODate } from "@/interfaces/common";

export interface ArticleItem {
  id: number;
  title: string;
  date: ISODate;
  time: string; // HH:mm
  tags: string[];
}
