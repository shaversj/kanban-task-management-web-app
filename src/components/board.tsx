import { useCallback, useEffect, useState } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Column from "@/components/column.tsx";
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index";
import { reorder } from "@atlaskit/pragmatic-drag-and-drop/reorder";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import todoData from "@/data/new_data.json";

export default function Board() {
  const [columnsData, setColumnsData] = useState(todoData.boards[0].columns);

  const reorderCard = useCallback(
    ({ columnId, startIndex, finishIndex }) => {
      setColumnsData((prevColumns) => {
        const sourceColumn = prevColumns.find((column) => column.id === columnId);
        if (!sourceColumn) return prevColumns; // fallback if not found

        const updatedTasks = reorder({
          list: sourceColumn.tasks,
          startIndex,
          finishIndex,
        });

        const updatedColumn = {
          ...sourceColumn,
          tasks: updatedTasks,
        };

        return prevColumns.map((column) => (column.id === columnId ? updatedColumn : column));
      });
    },
    [], // ✅ no dependency on columnsData
  );

  // Function to handle drop events
  const handleDrop = useCallback(
    ({ source, location }) => {
      // Early return if there are no drop targets in the current location
      const destination = location.current.dropTargets.length;
      if (!destination) {
        return;
      }

      if (source.data.type === "card") {
        // Retrieve the ID of the card being dragged
        const draggedCardId = source.data.taskId;
        console.log("handleDrop-draggedCardId", source);
        // Get the source column from the initial drop targets
        const [, sourceColumnRecord] = location.initial.dropTargets;

        // Retrieve the ID of the source column
        const sourceColumnId = sourceColumnRecord.data.columnId;

        // Get the data of the source column
        const sourceColumnData = columnsData.find((column) => column.id === sourceColumnId);

        // Get the index of the card being dragged in the source column
        const draggedCardIndex = sourceColumnData.tasks.findIndex((task) => task.id === draggedCardId);

        if (location.current.dropTargets.length === 2) {
          console.log("handleDrop", location.current.dropTargets);
          // Destructure and extract the destination card and column data from the drop targets
          const [destinationCardRecord, destinationColumnRecord] = location.current.dropTargets;

          // Extract the destination column ID from the destination column data
          const destinationColumnId = destinationColumnRecord.data.columnId;

          // Retrieve the destination column data using the destination column ID
          const destinationColumn = columnsData.find((column) => column.id === destinationColumnId);

          // Find the index of the target card within the destination column's cards
          const indexOfTarget = destinationColumn.tasks.findIndex((card) => card.id === destinationCardRecord.data.cardId);

          // Determine the closest edge of the target card: top or bottom
          const closestEdgeOfTarget = extractClosestEdge(destinationCardRecord.data);

          // Check if the source and destination columns are the same
          if (sourceColumnId === destinationColumnId) {
            // Calculate the destination index for the card to be reordered within the same column
            const destinationIndex = getReorderDestinationIndex({
              startIndex: draggedCardIndex,
              indexOfTarget,
              closestEdgeOfTarget,
              axis: "vertical",
            });

            // Perform the card reordering within the same column
            reorderCard({
              columnId: sourceColumnId,
              startIndex: draggedCardIndex,
              finishIndex: destinationIndex,
            });

            return;
          }
        }
      }
    },
    [columnsData, reorderCard],
  );

  // setup the monitor
  useEffect(() => {
    return monitorForElements({
      onDrop: handleDrop,
    });
  }, [handleDrop]);

  return (
    <div className="col-start-2 row-start-2 flex gap-x-6 bg-[#f4f7fd] px-6 dark:bg-[#20212c]">
      {columnsData.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
}
