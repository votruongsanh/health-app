import col1 from "@/assets/images/column/column-1.jpg";
import col2 from "@/assets/images/column/column-2.jpg";
import col3 from "@/assets/images/column/column-3.jpg";
import col4 from "@/assets/images/column/column-4.jpg";
import col5 from "@/assets/images/column/column-5.jpg";
import col6 from "@/assets/images/column/column-6.jpg";
import col7 from "@/assets/images/column/column-7.jpg";
import col8 from "@/assets/images/column/column-8.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ArticleItem } from "@/interfaces/column";
import { getArticles } from "@/services/columnService";
import { useEffect, useMemo, useState } from "react";

const IMAGES = [col1, col2, col3, col4, col5, col6, col7, col8];

export default function Articles() {
  const [items, setItems] = useState<ArticleItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getArticles(1)
      .then((res) => {
        setItems(res.items);
        setTotalPages(res.totalPages);
      })
      .catch((err) => console.error(err));
  }, []);

  const withImages = useMemo(
    () =>
      items.map((a, idx) => ({
        ...a,
        img: IMAGES[idx % IMAGES.length],
      })),
    [items]
  );

  const handleLoadMore = () => {
    if (page >= totalPages) return;
    const next = page + 1;
    getArticles(next)
      .then((res) => {
        setItems((prev) => [...prev, ...res.items]);
        setPage(next);
        setTotalPages(res.totalPages);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {withImages.map((a) => (
          <Card key={a.id} className="p-0 border-none rounded-none">
            <div className="relative">
              <img
                src={a.img}
                alt="article"
                className="h-40 w-full object-cover"
              />
              <div className="label-gradient absolute bottom-0 left-0 px-2 py-0.5 text-xs font-semibold text-black">
                {a.date.replace(/-/g, ".")} {a.time}
              </div>
            </div>
            <CardContent className="px-3 pb-4 pt-3">
              <div className="text-sm text-dark-600">{a.title}</div>
              <div className="mt-2 space-x-2 text-xs text-primary-300">
                {a.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleLoadMore} disabled={page >= totalPages}>
          {page >= totalPages ? "これ以上ありません" : "コラムをもっと見る"}
        </Button>
      </div>
    </section>
  );
}
