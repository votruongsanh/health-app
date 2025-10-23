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
          <div
            key={it.title}
            className="bg-dark-600 p-8 text-center text-white"
          >
            <div className="text-lg font-semibold tracking-wide">
              {it.title}
            </div>
            <div className="mt-4 inline-block rounded bg-primary-300 px-4 py-1 text-sm font-semibold text-black">
              {it.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
