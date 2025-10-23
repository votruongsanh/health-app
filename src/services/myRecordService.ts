import type { BodyPoint } from "@/interfaces/common";
import type { DiaryItem, ExerciseItem } from "@/interfaces/myRecord";
import {
  recordBodyYear,
  recordDiaries,
  recordExercises,
} from "@/mocks/recordData";
import { mockFetch } from "@/services/mockHttp";

export async function getRecordBody(): Promise<BodyPoint[]> {
  const res = await mockFetch(recordBodyYear, { delay: 300 });
  return res.json();
}

export async function getExercises(): Promise<ExerciseItem[]> {
  const res = await mockFetch(recordExercises, { delay: 250 });
  return res.json();
}

export async function getDiaries(): Promise<DiaryItem[]> {
  const res = await mockFetch(recordDiaries, { delay: 250 });
  return res.json();
}
