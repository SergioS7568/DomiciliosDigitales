const HeaderDD = () => {
  const iconFromPage =
    "https://domiciliosdigitales.justucuman.gov.ar/img/logos/logo-corte.png";

  return (
    <div className=" flex flex-col mt-6 mb-6 gap-4 ml-4 mr-4 items-center justify-center  md:justify-between md:flex-row">
      <img
        src={iconFromPage}
        alt="Domicilios Digitales"
        className="w-96 h-16  "
      ></img>
      <h1 className="text-3xl  font-Roboto font-bold">Domicilio Digital</h1>
    </div>
  );
};
export default HeaderDD;
