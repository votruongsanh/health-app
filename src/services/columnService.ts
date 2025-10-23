import type { ArticleItem } from "@/interfaces/column";
import type { Page } from "@/interfaces/common";
import { columnArticles } from "@/mocks/columnData";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getArticles(page = 1): Promise<Page<ArticleItem>> {
  await sleep(400);
  return { ...columnArticles, page };
}
