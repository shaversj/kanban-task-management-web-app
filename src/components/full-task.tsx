import TaskListItem from "@/components/task-list-item.tsx";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Todo" },
  { id: 2, name: "Doing" },
  { id: 3, name: "Done" },
];

export default function FullTask() {
  const [selected, setSelected] = useState(people[1]);

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
      </ul>

      <Listbox value={selected} onChange={setSelected}>
        <Label className="pt-6 text-[12px] font-bold tracking-[0px] text-[#7a7c87]">Current Status</Label>
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
            <span className="text-body-l col-start-1 row-start-1 truncate pr-6">{selected.name}</span>
            <svg
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>

            {/*<ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />*/}
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline outline-1 outline-black/5 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in data-[closed]:data-[leave]:opacity-0 sm:text-sm"
          >
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default py-2 pr-4 pl-8 text-gray-900 select-none data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
              >
                <span className="text-body-l block truncate group-data-[selected]:font-semibold">{person.name}</span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white group-[:not([data-selected])]:hidden">
                  {/*<CheckIcon aria-hidden="true" className="size-5" />*/}
                  <svg
                    aria-hidden={true}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
