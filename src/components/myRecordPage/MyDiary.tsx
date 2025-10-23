import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Diary = {
  date: string;
  time: string;
  content: string;
};

const DIARIES: Diary[] = Array.from({ length: 8 }).map(() => ({
  date: "2021.05.21",
  time: "23:25",
  content:
    "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
}));

export default function MyDiary() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-4 text-xl font-semibold tracking-wide">MY DIARY</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {DIARIES.map((d, idx) => (
          <Card key={idx} className="border-gray-300 bg-white p-0 shadow-none">
            <CardHeader className="px-5">
              <div className="text-lg font-medium text-dark-600">{d.date}</div>
              <div className="-mt-1 text-lg text-dark-600">{d.time}</div>
            </CardHeader>
            <CardContent className="px-5 pb-5 text-sm leading-7 text-dark-600">
              {d.content}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button>自分の日記をもっと見る</Button>
      </div>
    </section>
  );
}
