import "./App.css";
import FooterDD from "./Components/Footer/FooterDD";

import HeaderDD from "./Components/Header/HeaderDD";

function App() {
  return (
    <>
      <div>
        <HeaderDD></HeaderDD>
        <p className="text-3xl font-bold underline">Test</p>
        <FooterDD></FooterDD>
      </div>
    </>
  );
}

export default App;
