import { ReactNode } from "react";
import "./ModalFilter.css";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  toggleModal: () => void;
}

export const ModalFilter = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay " onClick={props.toggleModal}>
          <div className="modal-box " onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col">
              <h1>filtrar Resultados</h1>
              <p>
                Aqui puede filtrar según uno o varios de los siguientes campos:
              </p>
              <form className="flex flex-col">
                <label>
                  Apellido
                  <input type="text" name="lastname" />
                </label>
                <label>
                  Nombre
                  <input type="text" name="name" />
                </label>
                <label>
                  Perfil
                  <input type="text" name="profile.name" />
                </label>
                <div className="flex flex-row">
                  <label>
                    X<button>LIMPIAR</button>
                  </label>
                  <button>CANCELAR</button>
                  <button>BUSCAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
