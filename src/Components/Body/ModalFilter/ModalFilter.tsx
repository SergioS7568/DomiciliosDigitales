import {
  Control,
  Controller,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
} from "react-hook-form";
import { FilteredData } from "../../../Lib/getUsersInfo";

import "./ModalFilter.css";
import Grid from "../../Grid/Grid";
import React from "react";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

interface DataTyped {
  lastname: string;
  name: string;
  profile: string;
}

interface DataPersonnalType {
  lastname: string;
  name: string;
  profile: string;
}
interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  register: UseFormRegister<Datatype>;
  reset: UseFormReset<Datatype>;
  handleSubmit: (onSubmit: (data: Datatype) => void) => (event: any) => void;
  setFilteredData: React.Dispatch<React.SetStateAction<DataPersonnalType>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  filteredData: FilteredData;
  control: Control<Datatype>;
  watch: UseFormWatch<Datatype>;
}

export const ModalFilter = (props: Props) => {
  const {
    setFilteredData,
    setPageNumber,
    handleSubmit,
    register,
    reset,
    control,
    watch,
  } = props;

  // const { watch } = useForm<Datatype>();

  const onClickHandleExit = () => {
    props.toggleModal();
  };

  // const onSubmit = ( ) => {
  //   props.toggleModal();
  // };

  const onSubmit = (data: DataTyped) => {
    setFilteredData(data);
    console.log(" data   " + JSON.stringify(data));
    setPageNumber(0);

    props.toggleModal();
  };

  const handleReset = () => {
    reset({ lastname: "", name: "", profile: "" });
    setPageNumber(0);

    setFilteredData({ lastname: "", name: "", profile: "" });
  };

  return (
    <>
      {props.isOpen && (
        <div
          className="modal-overlay z-10 backdrop-blur-sm"
          onClick={props.toggleModal}
        >
          <div className="modal-box " onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-3 m-1 ">
              <h1 className="  font-bold text-gray-900 text-start   font-Roboto ">
                Filtrar Resultados
              </h1>
              <p className="  font-normal text-start  font-Roboto  ">
                Aqui puede filtrar según uno o varios de los siguientes campos:
              </p>

              <form
                className="flex flex-col gap-2  text-start font-medium text-gray-800  font-Roboto  "
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="lastnameInputID"
                      placeholder="Apellido"
                      className="bg-white outline outline-1  rounded-sm outline-stone-300  "
                      {...field}
                    />
                  )}
                ></Controller>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="nameInputID"
                      placeholder="Nombre"
                      className="bg-white outline outline-1  rounded-sm outline-stone-300 "
                      {...field}
                    />
                  )}
                ></Controller>
                <Controller
                  name="profile"
                  control={control}
                  render={({ field }) => (
                    <select
                      id="selectProfileID"
                      aria-label="selectProfileID"
                      className="bg-white outline outline-1  rounded-sm outline-stone-300  "
                      {...field}
                    >
                      <option disabled hidden>
                        Perfil
                      </option>
                      <option value={"ABOGADO/PROCURADOR"}>
                        ABOGADO/PROCURADOR
                      </option>
                      <option value={"ENTIDAD"}>ENTIDAD</option>
                      <option value={"PERITO/OTRO"}>PERITO/OTRO</option>
                    </select>
                  )}
                ></Controller>
                <div className="gap-2">
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      xl={6}
                      lg={6}
                      className="gap-1"
                    >
                      <div className="justify-self-start sm:justify-self-center md:justify-center">
                        <label>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                          <button
                            type="button"
                            // onClick={() => reset(defaultValues)}
                            onClick={handleReset}
                            className=" font-bold   "
                          >
                            LIMPIAR
                          </button>
                        </label>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                      <div className="justify-self-center ">
                        <button
                          className="btn btn-ghost font-bold  text-red-600  "
                          onClick={onClickHandleExit}
                        >
                          CANCELAR
                        </button>
                        <button
                          className="btn btn-ghost font-bold text-lightBlueShift-0 "
                          type="submit"
                          value="submit"
                        >
                          <label> BUSCAR</label>
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
