import { useForm } from "react-hook-form";
import Grid from "../../Grid/Grid";

import HookToggleModal from "../../Hooks/HookToggleModal";

import { ModalFilter } from "../ModalFilter/ModalFilter";

const TableFilters = () => {
  const { register, handleSubmit } = useForm();
  const { isOpen, toggleModal } = HookToggleModal();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected number: ", event.target.value);
    const value: string = event.target.value;
    console.log(value);
  };

  const onSubmit = (data: number) => console.log(data);

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
                      {...register("number")}
                      onChange={onSelectChange}
                      // ref={register({ required: "select one option" })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value={15}>15</option>
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
                    buscar
                  </button>
                </label>
              </div>
            </Grid>
          </Grid>
          <ModalFilter isOpen={isOpen} toggleModal={toggleModal}></ModalFilter>
        </div>
      </div>
    </div>
  );
};
export default TableFilters;
