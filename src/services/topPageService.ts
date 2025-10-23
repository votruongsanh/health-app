import type { BodyPoint } from "@/interfaces/common";
import type { Achievement, MealItem } from "@/interfaces/topPage";
import { topAchievement, topBodyYear, topMeals } from "@/mocks/topData";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getTopAchievement(): Promise<Achievement> {
  await sleep(200);
  return topAchievement;
}

export async function getTopBodyRecord(): Promise<BodyPoint[]> {
  await sleep(300);
  return topBodyYear;
}

export async function getTopMeals(): Promise<MealItem[]> {
  await sleep(250);
  return topMeals;
}
