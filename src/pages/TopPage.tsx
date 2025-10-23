import Achievement from "@/components/topPage/Achievement";
import FilterButtons from "@/components/topPage/FilterButtons";
import MealGrid from "@/components/topPage/MealGrid";

export default function TopPage() {
  return (
    <div className="space-y-0">
      <Achievement />
      <FilterButtons />
      <MealGrid />
    </div>
  );
}
