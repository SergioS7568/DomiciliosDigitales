const HeaderDD = () => {
  const iconFromPage =
    "https://domiciliosdigitales.justucuman.gov.ar/img/logos/logo-corte.png";

  return (
    <div className=" flex flex-col justify-center sm:flex-row md:flex-row lg:flex-row sm:justify-between md:justify-between lg:justify-between">
      <img
        src={iconFromPage}
        alt="Domicilios Digitales"
        className="w-96 h-16 sm:w-64 sm:h-11 md:w-64 md:h-11 lg:w-96 lg:h-16 "
      ></img>
      <h1 className="text-2xl  font-Roboto font-bold">Domicilio Digital</h1>
    </div>
  );
};
export default HeaderDD;
