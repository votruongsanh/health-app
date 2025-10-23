import { useEffect, useState } from "react";
import type { ExerciseItem } from "@/interfaces/myRecord";
import { getExercises } from "@/services/myRecordService";

function ExerciseRow({ item }: { item: ExerciseItem }) {
  return (
    <div className="flex items-center justify-between border-b border-white/20 py-3 text-white">
      <div className="pr-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          <span className="opacity-90">{item.name}</span>
        </div>
        <div className="pl-4 text-sm text-primary-300">{item.kcal}kcal</div>
      </div>
      <div className="text-right text-primary-300">{item.minutes} min</div>
    </div>
  );
}

export default function MyExercise() {
  const [items, setItems] = useState<ExerciseItem[]>([]);

  useEffect(() => {
    getExercises()
      .then((res) => setItems(res))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Split equally into 2 columns (use fallback EXERCISES for demo images/layout)
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded bg-dark-600/95 p-4">
        <div className="mb-2 flex items-end justify-between text-white">
          <div className="text-sm leading-tight">
            <div className="opacity-80">MY</div>
            <div className="-mt-0.5 opacity-80">EXERCISE</div>
          </div>
          <div className="text-2xl font-semibold tracking-wide">2021.05.21</div>
        </div>
        {/* Scrollable list area */}
        <div className="grid max-h-72 grid-cols-1 gap-6 overflow-y-auto pr-2 md:grid-cols-2 custom-scrollbar">
          <div>
            {left.map((e, idx) => (
              <ExerciseRow key={`l-${idx}`} item={items[idx] || e} />
            ))}
          </div>
          <div className="md:border-l md:border-white/20 md:pl-6">
            {right.map((e, idx) => (
              <ExerciseRow
                key={`r-${idx}`}
                item={items[idx + left.length] || e}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
