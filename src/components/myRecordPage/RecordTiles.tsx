import recommend1 from "@/assets/images/recommend/MyRecommend-1.jpg";
import recommend2 from "@/assets/images/recommend/MyRecommend-2.jpg";
import recommend3 from "@/assets/images/recommend/MyRecommend-3.jpg";

type Tile = {
  title: string;
  subtitle: string;
  image: string;
};

const tiles: Tile[] = [
  { title: "BODY RECORD", subtitle: "自分のカラダの記録", image: recommend1 },
  { title: "MY EXERCISE", subtitle: "自分の運動の記録", image: recommend2 },
  { title: "MY DIARY", subtitle: "自分の日記", image: recommend3 },
];

export default function RecordTiles() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
      {tiles.map((t) => (
        <div
          key={t.title}
          className="relative overflow-hidden border-14 border-primary-300"
        >
          {/* image */}
          <img
            src={t.image}
            alt={t.title}
            className="aspect-4/3 w-full object-cover opacity-80 grayscale"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* centered captions */}
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <div>
              <div className="text-2xl font-bold tracking-wide text-primary-300 sm:text-3xl">
                {t.title}
              </div>
              <div className="mx-auto mt-3 w-max rounded bg-primary-400 px-5 py-2 text-xs font-semibold text-white sm:text-sm">
                {t.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
