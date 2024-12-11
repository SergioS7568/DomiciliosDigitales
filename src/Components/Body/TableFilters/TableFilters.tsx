import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, watch, reset } = useForm<datatype>();
  const { isOpen, toggleModal } = useHookToggleModal();

  const watchedValues = watch(); // This will watch all fields
  const { name, lastname, profile, pageSize } = watchedValues;
  const profileName = profile ? profile.name : "";

  const onSubmit = (data: datatype) => {
    if (data) {
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
                {name ? (
                  <button
                    value={"name"}
                    className="btn btn-circle"
                    onClick={() => reset({ ...watchedValues, name: "" })}
                    {...register("name")}
                    type="submit"
                  >
                    {name}
                  </button>
                ) : (
                  <></>
                )}

                {lastname ? (
                  <button
                    value={"lastname"}
                    className="btn btn-circle"
                    onClick={() => reset({ ...watchedValues, lastname: "" })}
                    {...register("lastname")}
                    type="submit"
                  >
                    {lastname}
                  </button>
                ) : (
                  <></>
                )}

                {profileName ? (
                  <button
                    value={"profile"}
                    className="btn btn-circle"
                    onClick={() =>
                      reset({ ...watchedValues, profile: { name: "" } })
                    }
                    {...register("profile.name")}
                    type="submit"
                  >
                    {profileName}
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
                  <button className="btn btn-square" onClick={toggleModal}>
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
            reset={reset}
            handleSubmit={handleSubmit}
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
