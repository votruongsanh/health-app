import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

type Props<T extends Record<string, unknown>> = {
  data: T[];
  xKey: keyof T;
  weightKey?: keyof T;
  bodyFatKey?: keyof T;
  xTickFormatter?: (value: T[keyof T]) => string;
  containerClassName?: string;
};

export default function TwoLineChart<T extends Record<string, unknown>>({
  data,
  xKey,
  weightKey = "weight" as keyof T,
  bodyFatKey = "bodyFat" as keyof T,
  xTickFormatter,
  containerClassName,
}: Props<T>) {
  const chartConfig = {
    [weightKey as string]: { label: "Weight", color: "var(--primary-400)" },
    [bodyFatKey as string]: {
      label: "Body fat",
      color: "var(--secondary-300)",
    },
  } as const;

  return (
    <ChartContainer config={chartConfig} className={containerClassName}>
      <LineChart data={data} margin={{ left: 8, right: 8, top: 10, bottom: 8 }}>
        <CartesianGrid stroke="#555" vertical strokeOpacity={0.5} />
        <XAxis
          dataKey={xKey as string}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={xTickFormatter}
        />
        <YAxis hide domain={[0, "dataMax + 10"]} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey={weightKey as string}
          stroke={`var(--color-${weightKey as string})`}
          strokeWidth={2}
          dot
        />
        <Line
          type="monotone"
          dataKey={bodyFatKey as string}
          stroke={`var(--color-${bodyFatKey as string})`}
          strokeWidth={2}
          dot
        />
      </LineChart>
    </ChartContainer>
  );
}
