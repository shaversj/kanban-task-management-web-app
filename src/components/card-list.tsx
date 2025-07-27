import myData from "@/data/new_data.json";
import Card from "@/components/card.tsx";

export default function CardList() {
  return (
    <div>
      <div className={"flex items-center gap-x-4 pt-6"}>
        <div className={"size-[15px] rounded-full bg-[#49C4E5]"}></div>
        <h4 className={"text-[12px] leading-[15px] font-bold tracking-[2.4px] text-[#818fa3]"}>TODO ({myData.boards[0].columns[0].tasks.length})</h4>
      </div>
      <div className={"flex w-[280px] flex-col gap-y-5 pt-6"}>
        {myData.boards[0].columns[0].tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
