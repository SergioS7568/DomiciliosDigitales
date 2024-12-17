import { useForm } from "react-hook-form";
import { useState } from "react";

import Grid from "../../Grid/Grid";
import useHookToggleModal from "../../Hooks/useHookToggleModal";
import { ModalFilter } from "../ModalFilter/ModalFilter";
import TableContent from "../Table/TableContent";
import ImageSwitch from "../../ImageSwitch/ImageSwitch";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

const TableFilters = () => {
  const { register, setValue, getValues, watch } = useForm<Datatype>({
    defaultValues: {
      name: "",
      lastname: "",
      profile: "",
      pageSize: 15,
      pageNumber: 0,
    },
  });
  const { isOpen, toggleModal } = useHookToggleModal();

  const handleDeleteFilter = (filterToRemove: string) => {
    switch (filterToRemove) {
      case "lastname":
        {
          setValue("pageNumber", 0);
          watch("lastname");
          setValue("lastname", "");
        }

        break;
      case "name":
        {
          setValue("pageNumber", 0);
          watch("name");
          setValue("name", "");
        }

        break;
      case "profile":
        {
          setValue("pageNumber", 0);
          watch("profile");
          setValue("profile", "");
        }

        break;
    }
  };

  const handleSelectChanges = (event) => {
    const selectedPageSize = Number(event.target.value);
    watch("pageSize");
    setValue("pageSize", selectedPageSize, {
      shouldDirty: true,
    });

    setValue("pageNumber", 0);

    watch("pageNumber");

    // setValue("pageSize", event);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} lg={8} sm={12}>
          <div
            className="flex flex-col items-center md:items-start flex-wrap  pt-2 pb-2   
              gap-1"
          >
            <p className="font-semibold text-3xl  ">Listado </p>

            <div className=" gap-1 flex flex-col   sm:flex-col md:flex-row mmd:flex-row lg:flex-row ">
              {getValues("name") ? (
                <button
                  value={"name"}
                  className="btn btn-outline  px-1  rounded-lg  text-lg  "
                  onClick={() => handleDeleteFilter("name")}
                >
                  Nombre: {getValues("name")}
                  <ImageSwitch imageName="delete" imageProperties="" />
                </button>
              ) : (
                <></>
              )}

              {getValues("lastname") ? (
                <button
                  value={"lastname"}
                  className="btn btn-outline  px-1  rounded-lg  text-lg "
                  onClick={() => handleDeleteFilter("lastname")}
                >
                  Apellido: {getValues("lastname")}
                  <ImageSwitch imageName="delete" imageProperties="" />
                </button>
              ) : (
                <></>
              )}

              {getValues("profile") ? (
                <button
                  value={"profile"}
                  className="btn btn-outline  px-1  rounded-lg text-lg"
                  onClick={() => handleDeleteFilter("profile")}
                >
                  Perfil: {getValues("profile")}
                  <ImageSwitch imageName="delete" imageProperties="" />
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

            <form>
              <select
                {...register("pageSize")}
                onChange={handleSelectChanges}
                className="select btn-outline text-lg font-semibold hover:bg-inherit hover:text-inherit"
              >
                <option
                  className="dark:bg-darkGrayOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  value={15}
                  // onSelect={() => setValue("pageSize", 15)}
                >
                  {15}
                </option>
                <option
                  className="dark:bg-darkGrayOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  value={25}
                  // onSelect={() => setValue("pageSize", 25)}
                >
                  {25}
                </option>
                <option
                  className="dark:bg-darkGrayOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  value={50}
                  // onSelect={() => setValue("pageSize", 50)}
                >
                  {50}
                </option>
              </select>
            </form>

            <button
              className="btn btn-outline  dark:border-darkBlueShift-0 dark:bg-darkBlueShift-0
                 border-lightBlueShift-0 bg-lightBlueShift-0 text-gray-100"
              onClick={toggleModal}
            >
              BUSCAR
              <ImageSwitch imageName="glass" imageProperties="" />
            </button>
          </div>
        </Grid>
      </Grid>

      <TableContent
        unfilteredData={getValues(["name", "lastname", "profile"])}
        pageSizeWatch={getValues("pageSize")}
        pageNumber={getValues("pageNumber")}
        setValue={setValue}
      ></TableContent>
      <ModalFilter
        isOpen={isOpen}
        toggleModal={toggleModal}
        setValue={setValue}
      ></ModalFilter>
    </>
  );
};
export default TableFilters;
