import { cn } from "@/lib/utils";
import iconKnife from "@/assets/images/food/icon_knife.png";
import iconCup from "@/assets/images/food/icon_cup.png";

export default function FilterButtons() {
  const items = [
    { name: "Morning", icon: iconKnife },
    { name: "Lunch", icon: iconKnife },
    { name: "Dinner", icon: iconKnife },
    { name: "Snack", icon: iconCup },
  ];
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:gap-6">
        {items.map((it) => (
          <button
            key={it.name}
            className={cn(
              "hex-btn group flex flex-col items-center justify-center gap-2"
            )}
          >
            <img src={it.icon} alt={it.name} className="w-10 h-10" />
            <span className="mt-1 text-sm font-semibold">{it.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
