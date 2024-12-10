import TableFilters from "../Components/Body/TableFilters/TableFilters";
import FooterDD from "../Components/Footer/FooterDD";
import HeaderDD from "../Components/Header/HeaderDD";

const RootView = () => {
  return (
    <div>
      <HeaderDD></HeaderDD>
      {/* <p className="text-3xl font-bold underline">Test</p> */}
      <TableFilters></TableFilters>
      <FooterDD></FooterDD>
    </div>
  );
};
export default RootView;
