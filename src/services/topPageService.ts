import type { BodyPoint } from "@/interfaces/common";
import type { Achievement, MealItem } from "@/interfaces/topPage";
import { topAchievement, topBodyYear, topMeals } from "@/mocks/topData";
import { mockFetch } from "@/services/mockHttp";

export async function getTopAchievement(): Promise<Achievement> {
  const res = await mockFetch(topAchievement, { delay: 200 });
  return res.json();
}

export async function getTopBodyRecord(): Promise<BodyPoint[]> {
  const res = await mockFetch(topBodyYear, { delay: 300 });
  return res.json();
}

export async function getTopMeals(): Promise<MealItem[]> {
  const res = await mockFetch(topMeals, { delay: 250 });
  return res.json();
}
