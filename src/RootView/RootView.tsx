import { useEffect, useState } from "react";
import TableFilters from "../Components/Body/TableFilters/TableFilters";
import FooterDD from "../Components/Footer/FooterDD";
import HeaderDD from "../Components/Header/HeaderDD";
import ImageSwitch from "../Components/ImageSwitch/ImageSwitch";

const RootView = () => {
  const [theme, setTheme] = useState("light");

  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-blackOption-0 dark pl-4 pr-4 text-slate-300  min-h-screen font-roboto   "
          : "bg-grayOption-0  pl-4 pr-4  text-darkGrayOption-0 min-h-screen font-roboto "
      }
    >
      <div className="   flex flex-col ">
        <div className="  z-0  ">
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
              {theme === "dark" ? (
                <ImageSwitch imageName="moon" imageProperties="" />
              ) : (
                <ImageSwitch imageName="sun" imageProperties="" />
              )}
            </button>
            <button
              className="btn btn-circle opacity-70 hover:opacity-100 dark:border-darkBlueShift-0 dark:bg-darkBlueShift-0
                 border-lightBlueShift-0 bg-lightBlueShift-0 hover:bg-lightBlueShift-0  dark:hover:bg-lightBlueShift-0"
              onClick={onClickMoveTowardsTop}
            >
              <ImageSwitch imageName="arrowTop" imageProperties="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RootView;
