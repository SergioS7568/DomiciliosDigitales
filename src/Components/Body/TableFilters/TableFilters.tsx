import { useForm } from "react-hook-form";
import { useState } from "react";

import Grid from "../../Grid/Grid";

import useHookToggleModal from "../../Hooks/useHookToggleModal";
import { ModalFilter } from "../ModalFilter/ModalFilter";

interface datatype {
  pageSize: number;
  name: string;
  lastname: string;
  profile: {
    name: string;
  };
}

const TableFilters = () => {
  const [name, setName] = useState("1");
  const [lastname, setLastName] = useState("2");
  const [profileName, setProfileName] = useState("3");
  const [pageSize, setPageSize] = useState(15);
  const { register, handleSubmit, getValues } = useForm();
  const { isOpen, toggleModal } = useHookToggleModal();

  const onSubmit = (data: datatype) => {
    if (data) {
      setName(data.name);
      setLastName(data.lastname);
      setProfileName(data.profile.name);
      setPageSize(data.pageSize);
      console.log(data);
    } else {
      console.log(" no value selected ", data);
    }
  };

  return (
    <div>
      <div>
        <div>
          <Grid container>
            <Grid item xs={12} md={6} sm={12}>
              <div className="flex flex-row ">
                <p>Listado</p>

                {/* <button
                  value={"a"}
                  className="btn btn-circle"
                  {...register("example 1")}
                  type="submit"
                >
                  a
                </button>
                <button
                  value={"a"}
                  className="btn btn-circle"
                  {...register("example 1")}
                  type="submit"
                >
                  b
                </button>
                <button
                  value={"a"}
                  className="btn btn-circle"
                  {...register("example 1")}
                  type="submit"
                >
                  c
                </button> */}
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <div className=" flex flex-row ">
                <p>Mostrar</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor="numberSelect"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <select
                      id="numberSelect"
                      {...register("pageSize")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>15</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <input type="submit" placeholder=""></input>
                  </label>
                </form>
                <label
                  htmlFor="modal_toggle_filter"
                  className="btn flex items-center"
                >
                  <button
                    className="btn btn-square"
                    onClick={toggleModal}
                    onFocus={() => {
                      const values = getValues();
                      console.log(values);
                    }}
                  >
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
                    buscar
                  </button>
                </label>
              </div>
            </Grid>
          </Grid>
          <ModalFilter
            isOpen={isOpen}
            toggleModal={toggleModal}
            register={register}
          ></ModalFilter>
        </div>
        <h1>{lastname}</h1>
        <h1>{name}</h1>
        <h1>{profileName}</h1>
        <h1>{pageSize}</h1>
      </div>
    </div>
  );
};
export default TableFilters;
