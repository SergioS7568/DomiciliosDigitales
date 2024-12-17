import { useForm, UseFormSetValue } from "react-hook-form";

import "./ModalFilter.css";
import Grid from "../../Grid/Grid";

import ImageSwitch from "../../ImageSwitch/ImageSwitch";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  setValue: UseFormSetValue<Datatype>;
}

export const ModalFilter = (props: Props) => {
  const { setValue } = props;
  const { handleSubmit, register, reset } = useForm<Datatype>({
    defaultValues: {
      lastname: "",
      name: "",
      profile: "",
    },
  });

  const onClickHandleExit = () => {
    props.toggleModal();
  };

  const onSubmit = (data: Datatype) => {
    setValue("pageNumber", 0);
    setValue("name", data.name);
    setValue("lastname", data.lastname);
    setValue("profile", data.profile);
    reset();
    props.toggleModal();
  };

  const handleReset = () => {
    reset({ lastname: "", name: "", profile: "" });
    setValue("pageNumber", 0);
  };

  return (
    <>
      {props.isOpen && (
        <div
          className="modal-overlay z-10 backdrop-blur-sm 
          
          transition-opacity duration-1000 ease-in-out"
          onClick={props.toggleModal}
        >
          <div
            className="modal-box  transition-transform duration-1000 ease-in-out transform  dark:bg-blackOption-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 m-1  ">
              <h1 className="  font-bold text-2xl  text-start   font-Roboto mb-2 ">
                Filtrar Resultados
              </h1>
              <p className="  text-start   font-semibold  font-Roboto mb-1  ">
                Aqui puede filtrar según uno o varios de los siguientes campos:
              </p>

              <form
                className="flex flex-col gap-2  text-start font-medium  font-Roboto  "
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  id="lastnameInputID"
                  placeholder="Apellido"
                  maxLength={25}
                  pattern="^[a-zA-Z1-9_]+( [a-zA-Z0-9_]+)*$"
                  className="  outline outline-1  text-lg hover:bg-inherit  hover:text-inherit    overflow-scroll   font-semibold input btn-outline rounded-lg  dark:text-slate-300 text-darkGrayOption-0  "
                  {...register("lastname")}
                />

                <input
                  id="nameInputID"
                  placeholder="Nombre"
                  pattern="^[a-zA-Z1-9_]+( [a-zA-Z0-9_]+)*$"
                  maxLength={25}
                  className=" outline outline-1  text-lg hover:bg-inherit  hover:text-inherit bg-transparent overflow-scroll font-semibold  input btn-outline rounded-lg   dark:text-slate-300 text-darkGrayOption-0 "
                  {...register("name")}
                />

                <select
                  id="selectProfileID"
                  aria-label="selectProfileID"
                  className=" outline outline-1 text-lg  hover:bg-inherit  hover:text-inherit overflow-scroll font-semibold  dark:text-slate-300 text-darkGrayOption-0  select rounded-lg btn-outline  mb-2 "
                  {...register("profile")}
                >
                  <option disabled hidden value={""}>
                    Perfil...
                  </option>
                  <option
                    value={"ABOGADO/PROCURADOR"}
                    className="
                    dark:bg-blackOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  >
                    ABOGADO/PROCURADOR
                  </option>
                  <option
                    value={"ENTIDAD"}
                    className="dark:bg-blackOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  >
                    ENTIDAD
                  </option>
                  <option
                    value={"PERITO/OTRO"}
                    className="dark:bg-blackOption-0 dark:text-grayOption-0 bg-white text-darkGrayOption-0 "
                  >
                    PERITO/OTRO
                  </option>
                </select>

                <div className="gap-2">
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      xl={6}
                      lg={6}
                      className="gap-1"
                    >
                      <div className="justify-self-center  md:justify-start">
                        <button
                          type="button"
                          // onClick={() => reset(defaultValues)}
                          onClick={handleReset}
                          className=" font-bold btn btn-ghost text-lg  "
                        >
                          <ImageSwitch
                            imageName="trashCan"
                            imageProperties="size-8 text-gray-600"
                          />
                          LIMPIAR
                        </button>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                      <div className="justify-self-center  ">
                        <button
                          className="btn btn-ghost font-bold  text-lg  text-red-600  "
                          onClick={onClickHandleExit}
                        >
                          CANCELAR
                        </button>
                        <button
                          className="btn btn-ghost font-bold  text-lg  text-lightBlueShift-0 "
                          type="submit"
                        >
                          BUSCAR
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
