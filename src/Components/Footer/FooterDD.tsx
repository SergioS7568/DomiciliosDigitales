import { version } from "../../../package.json";

const FooterDD = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="justify-items-center m-4 ">
      <p className="font-Roboto  text-center  text-lg font-semibold">
        @{year} - Poder Judicial de Tucumán - Dirección de Sistemas
      </p>
      <p className="font-Roboto text-lg font-semibold text-center">
        {" "}
        v{version}
      </p>
    </div>
  );
};
export default FooterDD;
