import heroImg from "@/assets/images/food/m01.jpg";
import TwoLineChart from "@/components/common/TwoLineChart";
import type { BodyPoint } from "@/interfaces/common";
import { getTopAchievement, getTopBodyRecord } from "@/services/topPageService";
import { useEffect, useState } from "react";

export default function Achievement() {
  const [points, setPoints] = useState<BodyPoint[]>([]);
  const [date, setDate] = useState<string>("06/21");
  const [percent, setPercent] = useState<number>(75);
  useEffect(() => {
    getTopBodyRecord()
      .then((res) => setPoints(res))
      .catch((err) => {
        console.error(err);
      });
    getTopAchievement()
      .then((a) => {
        setDate(a.date.slice(5).replace("-", "/"));
        setPercent(a.percent);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="full-bleed">
      <div className="grid grid-cols-1 px-0 md:grid-cols-5">
        {/* Left: Date & Achievement over image */}
        <div className="relative h-56 overflow-hidden  sm:h-64 md:h-72 md:col-span-2">
          <img
            src={heroImg}
            alt="Achievement"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="relative h-40 w-40 rounded-full border-8 border-primary-400/90">
              <div className="absolute inset-3 rounded-full border-4 border-primary-300/90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-white/80">{date}</p>
                  <p className="text-2xl font-bold">{percent}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="flex h-56 items-center  bg-dark-600/95 p-3 sm:h-64 md:h-72 md:col-span-3">
          <TwoLineChart
            data={points.map((p) => ({
              x: p.x,
              weight: p.weight,
              bodyFat: p.bodyFat,
            }))}
            xKey="x"
            xTickFormatter={(v) => `${v}月`}
            containerClassName="aspect-auto h-full w-full rounded-md bg-transparent"
          />
        </div>
      </div>
    </section>
  );
}
