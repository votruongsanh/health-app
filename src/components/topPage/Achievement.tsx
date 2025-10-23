import heroImg from "@/assets/images/food/m01.jpg";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function Achievement() {
  const chartData = [
    { m: "6", weight: 62, bodyFat: 24 },
    { m: "7", weight: 56, bodyFat: 21 },
    { m: "8", weight: 58, bodyFat: 20 },
    { m: "9", weight: 55, bodyFat: 19 },
    { m: "10", weight: 54, bodyFat: 18 },
    { m: "11", weight: 57, bodyFat: 19 },
    { m: "12", weight: 53, bodyFat: 17 },
    { m: "1", weight: 51, bodyFat: 16 },
    { m: "2", weight: 50, bodyFat: 15 },
    { m: "3", weight: 49, bodyFat: 14 },
    { m: "4", weight: 50, bodyFat: 14.5 },
    { m: "5", weight: 51, bodyFat: 15.5 },
  ];

  const chartConfig = {
    weight: {
      label: "Weight",
      color: "var(--primary-400)",
    },
    bodyFat: {
      label: "Body fat",
      color: "var(--secondary-300)",
    },
  } as const;

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
                  <p className="text-xs text-white/80">06/21</p>
                  <p className="text-2xl font-bold">75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="flex h-56 items-center  bg-dark-600/95 p-3 sm:h-64 md:h-72 md:col-span-3">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-full w-full rounded-md bg-transparent"
          >
            <LineChart
              data={chartData}
              margin={{ left: 8, right: 8, top: 10, bottom: 8 }}
            >
              <CartesianGrid stroke="#555" vertical strokeOpacity={0.5} />
              <XAxis
                dataKey="m"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                ticks={[
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                ]}
                tickFormatter={(v) => `${v}m`}
              />
              <YAxis hide domain={[0, "dataMax + 10"]} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Line
                type="monotone"
                dataKey="weight"
                stroke="var(--color-weight)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="bodyFat"
                stroke="var(--color-bodyFat)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 3 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}
