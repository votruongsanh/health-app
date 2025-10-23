import { useState } from "react";
import TwoLineChart from "@/components/common/TwoLineChart";

type RangeKey = "day" | "week" | "month" | "year";

const DATA: Record<RangeKey, Array<Record<string, number | string>>> = {
  day: [
    { x: "6:00", weight: 62, bodyFat: 22 },
    { x: "9:00", weight: 61.6, bodyFat: 21.8 },
    { x: "12:00", weight: 61.3, bodyFat: 21.5 },
    { x: "15:00", weight: 61.2, bodyFat: 21.3 },
    { x: "18:00", weight: 61, bodyFat: 21 },
    { x: "21:00", weight: 60.9, bodyFat: 20.9 },
  ],
  week: [
    { x: "Mon", weight: 61.8, bodyFat: 21.6 },
    { x: "Tue", weight: 61.5, bodyFat: 21.4 },
    { x: "Wed", weight: 61.2, bodyFat: 21.1 },
    { x: "Thu", weight: 61, bodyFat: 20.9 },
    { x: "Fri", weight: 60.8, bodyFat: 20.7 },
    { x: "Sat", weight: 60.7, bodyFat: 20.6 },
    { x: "Sun", weight: 60.6, bodyFat: 20.5 },
  ],
  month: [
    { x: "1", weight: 61.9, bodyFat: 21.8 },
    { x: "5", weight: 61.5, bodyFat: 21.4 },
    { x: "10", weight: 61.2, bodyFat: 21.1 },
    { x: "15", weight: 61, bodyFat: 20.9 },
    { x: "20", weight: 60.8, bodyFat: 20.7 },
    { x: "25", weight: 60.7, bodyFat: 20.6 },
    { x: "30", weight: 60.6, bodyFat: 20.5 },
  ],
  year: [
    { x: "6", weight: 62, bodyFat: 24 },
    { x: "7", weight: 56, bodyFat: 21 },
    { x: "8", weight: 58, bodyFat: 20 },
    { x: "9", weight: 55, bodyFat: 19 },
    { x: "10", weight: 54, bodyFat: 18 },
    { x: "11", weight: 57, bodyFat: 19 },
    { x: "12", weight: 53, bodyFat: 17 },
    { x: "1", weight: 51, bodyFat: 16 },
    { x: "2", weight: 50, bodyFat: 15 },
    { x: "3", weight: 49, bodyFat: 14 },
    { x: "4", weight: 50, bodyFat: 14.5 },
    { x: "5", weight: 51, bodyFat: 15.5 },
  ],
};

const LABELS: Record<RangeKey, string> = {
  day: "日",
  week: "週",
  month: "月",
  year: "年",
};

export default function BodyRecordChart() {
  const [range, setRange] = useState<RangeKey>("year");

  const data = DATA[range as RangeKey];

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
          data={data}
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
