import Recommended from "@/components/columnPage/Recommended";
import Articles from "@/components/columnPage/Articles";

export default function ColumnPage() {
  return (
    <div className="space-y-6">
      <Recommended />
      <Articles />
    </div>
  );
}
