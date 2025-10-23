import RecordTiles from "@/components/myRecordPage/RecordTiles";
import BodyRecordChart from "@/components/myRecordPage/BodyRecordChart";
import MyExercise from "@/components/myRecordPage/MyExercise";
import MyDiary from "@/components/myRecordPage/MyDiary";

export default function MyRecordPage() {
  return (
    <div className="space-y-0">
      <RecordTiles />
      <BodyRecordChart />
      <MyExercise />
      <MyDiary />
    </div>
  );
}
