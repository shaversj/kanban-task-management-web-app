import { createFileRoute } from "@tanstack/react-router";

import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";
import iconShowSidebar from "../assets/images/icon-show-sidebar.svg";
import iconHideSidebar from "../assets/images/icon-hide-sidebar.svg";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import CardList from "@/components/card-list.tsx";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark");
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <div className="antialiased">
      <main className={"bg-red grid grid-cols-[261px_1fr] grid-rows-[97px_1fr]"}>
        <div
          className={
            "dark:bg-dark-grey col-start-1 col-end-1 row-span-full flex min-h-screen flex-col border-r border-r-[#e4ebfa] bg-white pb-8 dark:border-r-[#3e3f4e]"
          }
        >
          <div className={"pt-[32.78px] pl-[26px]"}>
            <img src={isDarkModeEnabled ? logoLight : logoDark} alt="Logo" className={"object-none"} />
          </div>

          <div className={"grow pt-[54px]"}>
            <h3 className={"text-heading-s pl-8 text-[#818fa3]"}>All Boards (8)</h3>

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

          <div className={"rounded-xl px-3"}>
            <div className={"dark:bg-very-dark-grey flex items-center justify-center gap-x-[23.67px] rounded-[6px] bg-[#f4f7fd] py-[15px]"}>
              <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834ZM3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334Zm-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667h.834Zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667h.833Zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0Z"
                  fill="#828FA3"
                />
              </svg>
              <Switch
                checked={isDarkModeEnabled}
                onChange={toggleDarkMode}
                className="group bg-main-purple inline-flex h-5 w-11 items-center rounded-full transition data-checked:bg-[#4d4a9c]"
              >
                <span className="size-[14px] translate-x-[3px] rounded-full bg-white transition group-data-checked:translate-x-6.75" />
              </Switch>

              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z"
                  fill="#828FA3"
                />
              </svg>
            </div>
          </div>

          <div className={"pt-4 pl-6"}>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={"text-heading-m flex h-12 items-center justify-center gap-x-[10px] text-[#818fa3]"}
            >
              <img src={isSidebarOpen ? iconHideSidebar : iconShowSidebar} alt="Toggle Sidebar" />
              Hide Sidebar
            </button>
          </div>
        </div>

        <div
          className={
            "dark:bg-dark-grey border-dark-grey col-start-2 col-end-3 row-start-1 row-end-1 flex items-center border-b border-b-[#e4ebfa] bg-white px-6 dark:border-b-[#3e3f4e]"
          }
        >
          <h1 className={"text-[20px] font-bold text-black dark:text-white"}>Platform Launch</h1>

          <div className={"ml-auto flex items-center gap-x-6"}>
            <button
              className={"bg-main-purple flex h-[48px] w-[164px] items-center justify-center gap-x-2 rounded-full text-[15px] font-bold text-white"}
            >
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
              </svg>
              Add New Task
            </button>

            <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fill-rule="evenodd">
                <circle cx="2.308" cy="2.308" r="2.308" />
                <circle cx="2.308" cy="10" r="2.308" />
                <circle cx="2.308" cy="17.692" r="2.308" />
              </g>
            </svg>
          </div>
        </div>

        <div className={"col-start-2 row-start-2 bg-[#f4f7fd] dark:bg-[#20212c]"}>
          <CardList />
        </div>
      </main>
    </div>
  );
}
