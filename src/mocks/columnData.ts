import type { ArticleItem } from "@/interfaces/column";
import type { Page } from "@/interfaces/common";

export const columnArticles: Page<ArticleItem> = {
  page: 1,
  totalPages: 2,
  items: Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    date: "2021-05-17",
    time: "23:25",
    tags: ["#魚料理", "#和食", "#DHA"],
  })),
};
