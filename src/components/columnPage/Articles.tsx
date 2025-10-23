import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import col1 from "@/assets/images/column/column-1.jpg";
import col2 from "@/assets/images/column/column-2.jpg";
import col3 from "@/assets/images/column/column-3.jpg";
import col4 from "@/assets/images/column/column-4.jpg";
import col5 from "@/assets/images/column/column-5.jpg";
import col6 from "@/assets/images/column/column-6.jpg";
import col7 from "@/assets/images/column/column-7.jpg";
import col8 from "@/assets/images/column/column-8.jpg";

const articles = [col1, col2, col3, col4, col5, col6, col7, col8].map(
  (img, i) => ({
    id: i + 1,
    img,
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  })
);

export default function Articles() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((a) => (
          <Card key={a.id} className="p-0">
            <div className="relative">
              <img
                src={a.img}
                alt="article"
                className="h-40 w-full object-cover"
              />
              <div className="label-gradient absolute bottom-0 left-0 px-2 py-0.5 text-xs font-semibold text-black">
                {a.date} {a.time}
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
        <Button>コラムをもっと見る</Button>
      </div>
    </section>
  );
}
