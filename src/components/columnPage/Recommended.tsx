type Item = {
  title: string;
  subtitle: string;
};

const items: Item[] = [
  { title: "RECOMMENDED COLUMN", subtitle: "オススメ" },
  { title: "RECOMMENDED DIET", subtitle: "ダイエット" },
  { title: "RECOMMENDED BEAUTY", subtitle: "美容" },
  { title: "RECOMMENDED HEALTH", subtitle: "健康" },
];

export default function Recommended() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="bg-dark-600 p-8 text-center">
            <div className="text-primary-300 text-2xl font-bold tracking-wide leading-tight">
              {it.title}
            </div>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-white/90" />
            <div className="mt-4 text-white text-lg font-medium">
              {it.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
