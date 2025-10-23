import TwoLineChart from "@/components/common/TwoLineChart";
import type { BodyPoint } from "@/interfaces/common";
import { getRecordBody } from "@/services/myRecordService";
import { useEffect, useState } from "react";

type RangeKey = "day" | "week" | "month" | "year";

// Data comes from mock API
const INITIAL_POINTS: BodyPoint[] = [];

const LABELS: Record<RangeKey, string> = {
  day: "日",
  week: "週",
  month: "月",
  year: "年",
};

export default function BodyRecordChart() {
  const [range, setRange] = useState<RangeKey>("year");
  const [points, setPoints] = useState<BodyPoint[]>(INITIAL_POINTS);
  useEffect(() => {
    getRecordBody()
      .then((res) => setPoints(res))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded bg-dark-600/95 p-4 text-white">
        <div className="mb-2 flex items-end justify-between">
          <div className="text-sm leading-tight">
            <div className="opacity-80">BODY</div>
            <div className="-mt-0.5 opacity-80">RECORD</div>
          </div>
          <div className="text-2xl font-semibold tracking-wide">2021.05.21</div>
        </div>
        <TwoLineChart
          data={points.map((p) => ({
            x: p.x,
            weight: p.weight,
            bodyFat: p.bodyFat,
          }))}
          xKey="x"
          xTickFormatter={(v) => (range === "year" ? `${v}月` : String(v))}
          containerClassName="aspect-auto h-72 w-full bg-transparent"
        />

        {/* Range filters */}
        <div className="mt-3 flex gap-3">
          {(Object.keys(LABELS) as RangeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setRange(key)}
              className={key === range ? "pill pill-active" : "pill"}
            >
              {LABELS[key]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
