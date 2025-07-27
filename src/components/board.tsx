import { useCallback, useEffect, useState } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Column from "@/components/column.tsx";
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index";
import { reorder } from "@atlaskit/pragmatic-drag-and-drop/reorder";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import todoData from "@/data/new_data.json";

export default function Board() {
  const [columnsData, setColumnsData] = useState(todoData.boards[0].columns);

  const moveCard = useCallback(
    ({
      movedCardIndexInSourceColumn,
      sourceColumnId,
      destinationColumnId,
      movedCardIndexInDestinationColumn,
    }: {
      movedCardIndexInSourceColumn: number;
      sourceColumnId: string;
      destinationColumnId: string;
      movedCardIndexInDestinationColumn: number;
    }) => {
      setColumnsData((prevColumns) => {
        const sourceColumn = prevColumns.find((column) => column.id === sourceColumnId);
        const destinationColumn = prevColumns.find((column) => column.id === destinationColumnId);

        if (!sourceColumn || !destinationColumn) {
          console.warn("Invalid column ID(s):", { sourceColumnId, destinationColumnId });
          return prevColumns;
        }

        const cardToMove = sourceColumn.tasks?.[movedCardIndexInSourceColumn];
        if (!cardToMove) {
          console.warn("Card not found at source index:", movedCardIndexInSourceColumn);
          return prevColumns;
        }

        // Remove card from source column
        const updatedSourceCards = sourceColumn.tasks.filter((_card, i) => i !== movedCardIndexInSourceColumn);

        // Insert card into destination column
        const updatedDestinationCards = [...destinationColumn.tasks];
        const insertIndex = movedCardIndexInDestinationColumn ?? 0;
        updatedDestinationCards.splice(insertIndex, 0, cardToMove);

        return prevColumns.map((column) => {
          if (column.id === sourceColumnId) {
            return {
              ...column,
              tasks: updatedSourceCards,
            };
          }

          if (column.id === destinationColumnId) {
            return {
              ...column,
              tasks: updatedDestinationCards,
            };
          }

          return column;
        });
      });
    },
    [],
  );

  const reorderCard = useCallback(({ columnId, startIndex, finishIndex }: { columnId: string; startIndex: number; finishIndex: number }) => {
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
  }, []);

  // Function to handle drop events
  const handleDrop = useCallback(
    ({
      source,
      location,
    }: {
      source: { data: Record<string, unknown> };
      location: { current: { dropTargets: any[] }; initial: { dropTargets: any[] } };
    }) => {
      // Early return if there are no drop targets in the current location
      const destination = location.current.dropTargets.length;
      if (!destination) {
        return;
      }

      if (source.data.type === "card") {
        // Retrieve the ID of the card being dragged
        const draggedCardId = source.data.taskId;
        // Get the source column from the initial drop targets
        const [, sourceColumnRecord] = location.initial.dropTargets;

        // Retrieve the ID of the source column
        const sourceColumnId = sourceColumnRecord.data.columnId;

        // Get the data of the source column
        const sourceColumnData = columnsData.find((column) => column.id === sourceColumnId);

        // Get the index of the card being dragged in the source column
        const draggedCardIndex = sourceColumnData?.tasks.findIndex((task) => task.id === draggedCardId) ?? -1;

        if (location.current.dropTargets.length === 2) {
          // Destructure and extract the destination card and column data from the drop targets
          const [destinationCardRecord, destinationColumnRecord] = location.current.dropTargets;

          // Extract the destination column ID from the destination column data
          const destinationColumnId = destinationColumnRecord.data.columnId;

          // Retrieve the destination column data using the destination column ID
          const destinationColumn = columnsData.find((column) => column.id === destinationColumnId);

          // Find the index of the target card within the destination column's cards
          const indexOfTarget = destinationColumn?.tasks.findIndex((card) => card.id === destinationCardRecord.data.cardId) ?? -1;
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

          const destinationIndex = closestEdgeOfTarget === "bottom" ? indexOfTarget + 1 : indexOfTarget;

          moveCard({
            movedCardIndexInSourceColumn: draggedCardIndex,
            sourceColumnId,
            destinationColumnId,
            movedCardIndexInDestinationColumn: destinationIndex,
          });
        }
      }
    },
    [columnsData, reorderCard, moveCard],
  );

  // set up the monitor
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
