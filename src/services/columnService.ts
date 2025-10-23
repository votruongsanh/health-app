import type { ArticleItem } from "@/interfaces/column";
import type { Page } from "@/interfaces/common";
import { columnArticles } from "@/mocks/columnData";
import { mockFetch } from "@/services/mockHttp";

export async function getArticles(page = 1): Promise<Page<ArticleItem>> {
  const res = await mockFetch({ ...columnArticles, page }, { delay: 400 });
  return res.json();
}
