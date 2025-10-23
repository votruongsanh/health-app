import d01 from "@/assets/images/food/d01.jpg";
import d02 from "@/assets/images/food/d02.jpg";
import l01 from "@/assets/images/food/l01.jpg";
import l02 from "@/assets/images/food/l02.jpg";
import m01 from "@/assets/images/food/m01.jpg";
import m02 from "@/assets/images/food/m02.jpg";
import s01 from "@/assets/images/food/s01.jpg";
import { Button } from "@/components/ui/button";

const meals = [
  { id: 1, label: "05.21 Morning", image: d01 },
  { id: 2, label: "05.21 Lunch", image: d02 },
  { id: 3, label: "05.21 Dinner", image: s01 },
  { id: 4, label: "05.21 Snack", image: s01 },
  { id: 5, label: "05.20 Morning", image: l01 },
  { id: 6, label: "05.20 Lunch", image: l02 },
  { id: 7, label: "05.20 Dinner", image: m01 },
  { id: 8, label: "05.20 Snack", image: m02 },
];

export default function MealGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((m) => (
          <div key={m.id} className="relative overflow-hidden rounded">
            <img
              src={m.image}
              alt={m.label}
              className="h-48 w-full object-cover"
            />
            <div className="label-gradient absolute bottom-0 left-0 px-2 py-1 text-xs font-semibold text-white">
              {m.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button>記録をもっと見る</Button>
      </div>
    </section>
  );
}
