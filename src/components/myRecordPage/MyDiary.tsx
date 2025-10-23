import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { DiaryItem } from "@/interfaces/myRecord";
import { getDiaries } from "@/services/myRecordService";
import { useEffect, useState } from "react";

export default function MyDiary() {
  const [diaries, setDiaries] = useState<DiaryItem[]>([]);

  useEffect(() => {
    getDiaries()
      .then((res) => setDiaries(res))
      .catch((err) => console.error(err));
  }, []);

  const handleLoadMore = () => {
    getDiaries()
      .then((res) => setDiaries((prev) => [...prev, ...res]))
      .catch((err) => console.error(err));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-4 text-xl font-semibold tracking-wide">MY DIARY</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {diaries.map((d, idx) => (
          <Card key={idx} className="border-gray-300 bg-white p-0 shadow-none">
            <CardHeader className="px-5">
              <div className="text-lg font-medium text-dark-600">
                {d.date.replace(/-/g, ".")}
              </div>
              <div className="-mt-1 text-lg text-dark-600">{d.time}</div>
            </CardHeader>
            <CardContent className="px-5 pb-5 text-sm leading-7 text-dark-600">
              {d.content}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleLoadMore}>自分の日記をもっと見る</Button>
      </div>
    </section>
  );
}
