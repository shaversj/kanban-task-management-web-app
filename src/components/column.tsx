import Card from "@/components/card.tsx";
import { useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type ColumnProps = {
  column: Column;
};

export default function Column({ column }: ColumnProps) {
  const columnRef = useRef(null); // Create a ref for the column
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const columnId = column.id; // Extract column ID for use in the drop target

  useEffect(() => {
    const columnEl = columnRef.current;
    invariant(columnEl); // Ensure the column element exists

    // Set up the drop target for the column element
    return dropTargetForElements({
      element: columnEl,
      onDragStart: () => setIsDraggedOver(true),
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
      getData: () => ({ columnId }), // Attach column ID to the data object
      getIsSticky: () => true,
    });
  }, [columnId]);

  return (
    <>
      <div ref={columnRef} className={`${isDraggedOver ? "opacity-50" : ""}`}>
        <div className={"flex items-center gap-x-4 pt-6"}>
          <div className={"size-[15px] rounded-full bg-[#49C4E5]"}></div>
          <h4 className={"text-[12px] leading-[15px] font-bold tracking-[2.4px] text-[#818fa3] uppercase"}>
            {column.name} ({column.tasks.length})
          </h4>
        </div>
        <div className={"flex w-[280px] flex-col gap-y-5 pt-6"}>
          {column.tasks.map((task) => (
            <Card key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
