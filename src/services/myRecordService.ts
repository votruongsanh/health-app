import type { BodyPoint } from "@/interfaces/common";
import type { DiaryItem, ExerciseItem } from "@/interfaces/myRecord";
import {
  recordBodyYear,
  recordDiaries,
  recordExercises,
} from "@/mocks/recordData";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getRecordBody(): Promise<BodyPoint[]> {
  await sleep(300);
  return recordBodyYear;
}

export async function getExercises(): Promise<ExerciseItem[]> {
  await sleep(250);
  return recordExercises;
}

export async function getDiaries(): Promise<DiaryItem[]> {
  await sleep(250);
  return recordDiaries;
}
