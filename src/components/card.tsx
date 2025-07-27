import { useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { attachClosestEdge, extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import DropIndicator from "@/components/drop-indicator.tsx";
import type { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";

type CardProps = {
  task: {
    id: string;
    title: string;
    description: string;
    status: string;
    subtasks: {
      id: string;
      title: string;
      isCompleted: boolean;
    }[];
  };
};

export default function Card({ task }: CardProps) {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null);

  const getCompletedSubTasks = () => {
    return task?.subtasks?.filter((subtask) => subtask.isCompleted).length;
  };

  useEffect(() => {
    const cardEl = cardRef.current;
    invariant(cardEl); // Ensure the card element exists

    return combine(
      draggable({
        element: cardEl, // Attach the card element to draggable
        onDragStart: () => setIsDragging(true),
        getInitialData: () => ({ type: "card", taskId: task.id }), // Attach card data to a draggable item when dragging starts
        onDrop: () => setIsDragging(false),
      }),
      // Add dropTargetForElements to make the card a drop target
      dropTargetForElements({
        element: cardEl,
        getData: ({ input, element }) => {
          // To attach card data to a drop target
          const data = { type: "card", cardId: task.id };

          // Attaches the closest edge (top or bottom) to the data object
          // This data will be used to determine where to drop card relative
          // to the target card.
          return attachClosestEdge(data, {
            input,
            element,
            allowedEdges: ["top", "bottom"],
          });
        },
        getIsSticky: () => true, // To make a drop target "sticky"
        onDragEnter: (args) => {
          // Update the closest edge when a draggable item enters the drop zone
          if (args.source.data.taskId !== task.id) {
            setClosestEdge(extractClosestEdge(args.self.data));
          }
        },
        onDrag: (args) => {
          // Continuously update the closest edge while dragging over the drop zone
          if (args.source.data.taskId !== task.id) {
            setClosestEdge(extractClosestEdge(args.self.data));
          }
        },
        onDragLeave: () => {
          // Reset the closest edge when the draggable item leaves the drop zone
          setClosestEdge(null);
        },
        onDrop: () => {
          // Reset the closest edge when the draggable item is dropped
          setClosestEdge(null);
        },
      }),
    );
  }, []);

  return (
    <div ref={cardRef} className="relative">
      <div
        data-swapy-item={task?.title}
        className={`dark:bg-dark-grey rounded-lg bg-white px-4 py-6 shadow-[0px_4px_6px_rgba(54,78,126,0.101545)] hover:opacity-50 ${isDragging ? "opacity-50" : "opacity-100"}`}
      >
        <div className="flex flex-col gap-y-2">
          <h3 className="text-heading-m text-black dark:text-white">{task?.title}</h3>
          <p className="text-[12px] font-bold text-[#818fa3]">
            {getCompletedSubTasks()} of {task?.subtasks?.length} subtasks
          </p>
        </div>
      </div>
      {closestEdge && <DropIndicator edge={closestEdge} />}
    </div>
  );
}
