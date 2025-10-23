import type { BodyPoint } from "@/interfaces/common";
import type { Achievement, MealItem } from "@/interfaces/topPage";

// Achievement for Top Page
export const topAchievement: Achievement = {
  date: "2021-05-21",
  percent: 75,
};

// Body data (year) for Top Page chart
export const topBodyYear: BodyPoint[] = Array.from({ length: 12 }).map(
  (_, i) => {
    const month = (i + 6) % 12 || 12; // 6..12,1..5
    const weight = 62 - i * 1 + Math.sin(i) * 1.2;
    const bodyFat = 24 - i * 1 + Math.cos(i) * 0.8;
    return {
      x: String(month),
      weight: Number(weight.toFixed(1)),
      bodyFat: Number(bodyFat.toFixed(1)),
    };
  }
);

// Meals list to render the grid
export const topMeals: MealItem[] = [
  { id: 1, dateLabel: "05.21 Morning", kind: "morning" },
  { id: 2, dateLabel: "05.21 Lunch", kind: "lunch" },
  { id: 3, dateLabel: "05.21 Dinner", kind: "dinner" },
  { id: 4, dateLabel: "05.21 Snack", kind: "snack" },
  { id: 5, dateLabel: "05.20 Morning", kind: "morning" },
  { id: 6, dateLabel: "05.20 Lunch", kind: "lunch" },
  { id: 7, dateLabel: "05.20 Dinner", kind: "dinner" },
  { id: 8, dateLabel: "05.20 Snack", kind: "snack" },
];
