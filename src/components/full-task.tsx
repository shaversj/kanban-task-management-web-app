import TaskListItem from "@/components/task-list-item.tsx";

export default function FullTask() {
  return (
    <div className={"h-[523px] w-[480px] rounded-md bg-white p-8"}>
      <h2 className={"text-heading-l font-black"}>Research pricing points of various competitors and trial different business models</h2>
      <p className={"text-medium-grey text-body-l pt-6"}>
        We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </p>

      <h3 className={"pt-6 text-[12px] font-bold tracking-[0px] text-[#7a7c87]"}>Subtasks (2 of 3)</h3>
      <ul className={"mt-4 flex flex-col gap-y-4"}>
        <li>
          <TaskListItem />
        </li>

        {/*<input*/}
        {/*  type="checkbox"*/}
        {/*  id="some_id"*/}
        {/*  className="peer checked:bg-main-purple relative mt-1 h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-[#e4e7eb] bg-white checked:border-0"*/}
        {/*/>*/}

        {/*<svg className={""} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*  <rect width="16" height="16" rx="2" fill="white" />*/}
        {/*  <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#828FA3" stroke-opacity="0.248914" />*/}
        {/*</svg>*/}

        {/*<svg*/}
        {/*  className={"pointer-events-none absolute mt-1 ml-[2.8px] hidden peer-checked:block"}*/}
        {/*  width="10"*/}
        {/*  height="8"*/}
        {/*  viewBox="0 0 10 8"*/}
        {/*  fill="none"*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*>*/}
        {/*  <path d="M1.27588 3.0658L4.03234 5.82227L9.03234 0.822266" stroke="white" stroke-width="2" />*/}
        {/*</svg>*/}
      </ul>

      <h3 className={"pt-6 text-[12px] font-bold tracking-[0px] text-[#7a7c87]"}>Current Status</h3>
    </div>
  );
}
