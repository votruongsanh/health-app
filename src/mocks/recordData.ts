import type { BodyPoint } from "@/interfaces/common";
import type { DiaryItem, ExerciseItem } from "@/interfaces/myRecord";

export const recordBodyYear: BodyPoint[] = Array.from({ length: 12 }).map(
  (_, i) => {
    const month = (i + 6) % 12 || 12;
    const weight = 62 - i * 1 + Math.sin(i) * 1.1;
    const bodyFat = 24 - i * 1 + Math.cos(i) * 0.7;
    return {
      x: String(month),
      weight: Number(weight.toFixed(1)),
      bodyFat: Number(bodyFat.toFixed(1)),
    };
  }
);

export const recordExercises: ExerciseItem[] = Array.from({ length: 8 }).map(
  (_, i) => ({
    id: i + 1,
    name: "家事全般（立位・軽い）",
    minutes: 10,
    kcal: 26,
  })
);

export const recordDiaries: DiaryItem[] = Array.from({ length: 8 }).map(
  (_, i) => ({
    id: i + 1,
    date: "2021-05-21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキスト…",
  })
);
