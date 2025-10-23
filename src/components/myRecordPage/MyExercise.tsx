type Exercise = {
  name: string;
  kcal: number;
  minutes: number;
};

const EXERCISES: Exercise[] = [
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
  { name: "家事全般（立位・軽い）", kcal: 26, minutes: 10 },
];

function ExerciseRow({ item }: { item: Exercise }) {
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
  // Split equally into 2 columns
  const mid = Math.ceil(EXERCISES.length / 2);
  const left = EXERCISES.slice(0, mid);
  const right = EXERCISES.slice(mid);

  return (
    <section className="mx-auto max-w-6xl px-4">
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
              <ExerciseRow key={`l-${idx}`} item={e} />
            ))}
          </div>
          <div className="md:border-l md:border-white/20 md:pl-6">
            {right.map((e, idx) => (
              <ExerciseRow key={`r-${idx}`} item={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
