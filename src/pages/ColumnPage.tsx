import Articles from "@/components/columnPage/Articles";
import Recommended from "@/components/columnPage/Recommended";

export default function ColumnPage() {
  return (
    <div className="space-y-6">
      <Recommended />
      <Articles />
    </div>
  );
}
