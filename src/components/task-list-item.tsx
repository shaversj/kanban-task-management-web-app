import { Checkbox } from "@headlessui/react";
import { useState } from "react";

export default function TaskListItem() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={"flex items-center gap-x-4 rounded-sm bg-[#f4f7fd] p-3"}>
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className={"group data-checked:bg-main-purple block size-4 rounded-sm border border-[#e4e7eb] bg-white data-checked:border-0"}
      >
        <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Checkbox>

      <p className={`text-body-m text-[12px] font-bold tracking-[0px] text-[#7a7c87] ${enabled ? "line-through" : ""}`}>
        Research competitor pricing and business models
      </p>
    </div>
  );
}
