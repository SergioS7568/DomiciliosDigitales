import React, { useState } from "react";
import TableFilters from "../Components/Body/TableFilters/TableFilters";
import FooterDD from "../Components/Footer/FooterDD";
import HeaderDD from "../Components/Header/HeaderDD";

const RootView = () => {
  const [theme, setTheme] = React.useState("light");
  const [dark, setDark] = useState(false);
  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    const changeTheme = !dark;
    setDark(changeTheme);
  };
  React.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={
        dark
          ? "bg-blackOption-0 dark pl-4 pr-4 text-slate-300  min-h-screen font-roboto dark  "
          : "bg-grayOption-0  pl-4 pr-4  text-darkGrayOption-0 min-h-scree font-roboto "
      }
    >
      <div className="   flex flex-col ">
        <div className="  z-0 ">
          <HeaderDD></HeaderDD>
          {/* <p className="text-3xl font-bold underline">Test</p> */}
          <TableFilters></TableFilters>
          <FooterDD></FooterDD>
          <div className="  z-20 fixed bottom-5 right-5 gap-1 flex flex-col">
            <button
              className="btn btn-circle opacity-70 hover:opacity-95 dark:border-darkBlueShift-0 dark:bg-darkBlueShift-0
                 border-lightBlueShift-0 bg-lightBlueShift-0 hover:bg-lightBlueShift-0  dark:hover:bg-lightBlueShift-0 "
              onClick={() => toggleTheme()}
            >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
            <button
              className="btn btn-circle opacity-70 hover:opacity-100 dark:border-darkBlueShift-0 dark:bg-darkBlueShift-0
                 border-lightBlueShift-0 bg-lightBlueShift-0 hover:bg-lightBlueShift-0  dark:hover:bg-lightBlueShift-0"
              onClick={onClickMoveTowardsTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RootView;
