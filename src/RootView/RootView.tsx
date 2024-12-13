import React from "react";
import TableFilters from "../Components/Body/TableFilters/TableFilters";
import FooterDD from "../Components/Footer/FooterDD";
import HeaderDD from "../Components/Header/HeaderDD";

const RootView = () => {
  const [theme, setTheme] = React.useState("light");
  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(theme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="  bg-grayOption-0">
      <div className="  z-0 ">
        <HeaderDD></HeaderDD>
        {/* <p className="text-3xl font-bold underline">Test</p> */}
        <TableFilters></TableFilters>
        <FooterDD></FooterDD>
        <div className="  z-20 fixed bottom-5 right-5 gap-1 flex flex-col">
          <button
            className="btn btn-circle opacity-60 hover:opacity-95 "
            onClick={() => toggleTheme()}
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
          <button
            className="btn btn-circle opacity-60 hover:opacity-95 "
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
  );
};
export default RootView;
