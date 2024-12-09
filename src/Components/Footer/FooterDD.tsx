import { version } from "../../../package.json";

const FooterDD = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <p className="font-Roboto text-regularSizedText font-medium">
        @{year} - Poder Judicial de Tucumán - Dirección de Sistemas
      </p>
      <p className="font-Roboto text-regularSizedText font-medium">
        {" "}
        v{version}
      </p>
    </div>
  );
};
export default FooterDD;
