import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

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

const TableFilters = (props: Props) => {
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
  console.log("page number is ...", pageNumber);

  const onSubmit = (data: Datatype) => {
    if (data.pageSize) {
      console.log(data.pageSize);
      // getUsersInfo([pageSize]);
    } else {
      console.log(" no value selected ", data);
    }
  };

  // useQuery({
  //   queryKey: [pageSize],
  //   queryFn: (context) => {
  //     const queryKey = context.queryKey as [number];
  //     return getUsersInfo(queryKey);
  //   },
  // });

  const handleDeleteFilter = (filterToRemove: string) => {
    switch (filterToRemove) {
      case "lastname":
        setFilteredData({
          lastname: "",
          name: filteredData.name,
          profile: filteredData.profile,
        });
        setValue("lastname", "");
        break;
      case "name":
        setFilteredData({
          lastname: filteredData.lastname,
          name: "",
          profile: filteredData.profile,
        });
        setValue("name", "");
        break;
      case "profile":
        setFilteredData({
          lastname: filteredData.lastname,
          name: filteredData.name,
          profile: "",
        });
        setValue("profile", "");
        break;
    }
    console.log(filteredData);
  };

  const pageSizeWatch = watch("pageSize");

  const handleSelectPageSize = (event) => {
    setPageSize(event.target.value);
  };

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} sm={12}>
            <div className="flex flex-row ">
              <p>Listado</p>
              {name ? (
                <button
                  value={"name"}
                  className="btn btn-circle"
                  onClick={() => handleDeleteFilter("name")}
                >
                  {name}
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
                  className="btn btn-circle"
                  onClick={() => handleDeleteFilter("lastname")}
                >
                  {lastname}
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
                  className="btn btn-circle"
                  onClick={() => handleDeleteFilter("profile")}
                >
                  {profileName}
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
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              ) : (
                <></>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <div className=" flex flex-row ">
              <p>Mostrar</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="numberSelect"
                  // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  className="block mb-2 text-sm font-medium "
                >
                  <Controller
                    name="pageSize"
                    control={control}
                    render={({ field }) => (
                      <select {...field}>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                      </select>
                    )}
                  />
                </label>
              </form>
              <label
                htmlFor="modal_toggle_filter"
                className="btn flex items-center"
              >
                <button className="btn btn-square " onClick={toggleModal}>
                  buscar
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
              </label>
            </div>
          </Grid>
        </Grid>
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

      <TableContent
        filteredData={filteredData}
        pageSizeWatch={pageSizeWatch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      ></TableContent>
    </div>
  );
};
export default TableFilters;
