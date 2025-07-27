import type { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";

export default function DropIndicator({ edge }: { edge: Edge }) {
  const isTop = edge === "top";

  return <div className={`bg-main-purple absolute right-0 left-0 h-2 transition-all duration-150 ${isTop ? "top-0" : "bottom-0"}`} />;
}
