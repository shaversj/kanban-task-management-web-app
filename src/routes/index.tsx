import { createFileRoute } from "@tanstack/react-router";

import logoLight from "../assets/images/logo-light.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="">
      <main className={"bg-red grid grid-cols-[300px_1fr] grid-rows-[97px_1fr]"}>
        <div className={"bg-dark-grey col-start-1 col-end-1 row-span-full min-h-screen border border-r-[#3e3f4e]"}>
          <img src={logoLight} className="pt-[32.78px] pl-[34px]" alt="logo" />

          <div className={"pt-[54px]"}>
            <h3 className={"text-heading-s pl-8 dark:text-[#818fa3]"}>All Boards (8)</h3>

            <div className={"flex flex-col pt-[19px]"}>
              <div className={"group mr-6 flex h-12 rounded-r-full text-[#818fa3] hover:bg-[#635fc7] hover:text-white"}>
                <div className={"flex items-center gap-x-4 pl-8"}>
                  <svg className={"fill-[#828FA3] group-hover:fill-white"} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
                  </svg>
                  <h3 className={"text-heading-m"}>Platform Launch</h3>
                </div>
              </div>

              <div className={"group mr-6 flex h-12 rounded-r-full text-[#818fa3] hover:bg-[#635fc7] hover:text-white"}>
                <div className={"flex items-center gap-x-4 pl-8"}>
                  <svg className={"fill-[#828FA3] group-hover:fill-white"} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
                  </svg>
                  <h3 className={"text-heading-m"}>Marketing Plan</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"bg-dark-grey border-dark-grey col-start-2 col-end-3 row-start-1 row-end-1 border border-b-[#3e3f4e]"}>Stuff</div>

        <div className={"col-start-2 row-start-2 bg-[#20212c]"}>More Stuff</div>
      </main>
    </div>
  );
}
