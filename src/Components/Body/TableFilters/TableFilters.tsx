import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import Grid from "../../Grid/Grid";
import useHookToggleModal from "../../Hooks/useHookToggleModal";
import { ModalFilter } from "../ModalFilter/ModalFilter";
import { FilteredData } from "../../../Lib/getUsersInfo";
import TableContent from "../Table/TableContent";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

const TableFilters = () => {
  const { register, handleSubmit, watch, reset, setValue, control } =
    useForm<Datatype>({
      defaultValues: {
        name: "",
        lastname: "",
        profile: "",
        pageSize: 15,
        pageNumber: 0,
      },
    });
  const { isOpen, toggleModal } = useHookToggleModal();

  const watchedValues = watch(); // This will watch all fields
  const { name, lastname, profile } = watchedValues;
  const profileName = profile;

  const [filteredData, setFilteredData] = useState<FilteredData>({
    lastname: "",
    name: "",
    profile: "",
  });

  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(15);

  const onSubmit = (data: Datatype) => {
    if (data.pageSize) {
      // getUsersInfo([pageSize]);
    } else {
      // console.log(" no value selected ", data);
    }
  };

  const handleDeleteFilter = (filterToRemove: string) => {
    switch (filterToRemove) {
      case "lastname":
        setFilteredData({
          lastname: "",
          name: filteredData.name,
          profile: filteredData.profile,
        });
        setValue("lastname", "");
        setPageNumber(0);
        break;
      case "name":
        setFilteredData({
          lastname: filteredData.lastname,
          name: "",
          profile: filteredData.profile,
        });
        setValue("name", "");
        setPageNumber(0);
        break;
      case "profile":
        setFilteredData({
          lastname: filteredData.lastname,
          name: filteredData.name,
          profile: "",
        });
        setValue("profile", "");
        setPageNumber(0);
        break;
    }
  };

  const pageSizeWatch = watch("pageSize");

  useEffect(() => {
    setPageNumber(0);
  }, [pageSizeWatch]);

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} lg={8} sm={12}>
            <div
              className="flex flex-col items-center md:items-start flex-wrap  pt-2 pb-2   
              gap-1"
            >
              <p className="font-semibold text-3xl  ">Listado</p>
              <div className=" gap-1 flex flex-col   sm:flex-col md:flex-row mmd:flex-row lg:flex-row ">
                {name ? (
                  <button
                    value={"name"}
                    className="btn btn-outline  px-1  rounded-lg  text-lg  "
                    onClick={() => handleDeleteFilter("name")}
                  >
                    Nombre: {name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}

                {lastname ? (
                  <button
                    value={"lastname"}
                    className="btn btn-outline  px-1  rounded-lg  text-lg "
                    onClick={() => handleDeleteFilter("lastname")}
                  >
                    Apellido: {lastname}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}

                {profileName ? (
                  <button
                    value={"profile"}
                    className="btn btn-outline  px-1  rounded-lg text-lg"
                    onClick={() => handleDeleteFilter("profile")}
                  >
                    Perfil: {profileName}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={12}>
            <div className=" gap-2 flex flex-row justify-center md:justify-end   items-center ">
              <p className="text-xl font-semibold ">Mostrar</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="numberSelect"
                  className="  text-sm font-medium block  "
                >
                  <Controller
                    name="pageSize"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="select btn-outline text-lg font-semibold "
                      >
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                      </select>
                    )}
                  />
                </label>
              </form>

              <button
                className="btn btn-outline  dark:border-darkBlueShift-0 dark:bg-darkBlueShift-0
                 border-lightBlueShift-0 bg-lightBlueShift-0 text-gray-100"
                onClick={toggleModal}
              >
                BUSCAR
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>

      <TableContent
        filteredData={filteredData}
        pageSizeWatch={pageSizeWatch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      ></TableContent>
      <ModalFilter
        isOpen={isOpen}
        toggleModal={toggleModal}
        register={register}
        reset={reset}
        handleSubmit={handleSubmit}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        setPageNumber={setPageNumber}
        control={control}
        watch={watch}
      ></ModalFilter>
    </div>
  );
};
export default TableFilters;
