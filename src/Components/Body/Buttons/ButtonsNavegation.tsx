import { UseFormSetValue } from "react-hook-form";
import ImageSwitch from "../../ImageSwitch/ImageSwitch";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

interface Props {
  offset: number | undefined;
  pageNumber: number | undefined;
  pageSize: number | undefined;
  totalPages: number | undefined;
  totalElements: number | undefined;
  numberOfElements: number | undefined;
  last: boolean | undefined;
  first: boolean | undefined;
  setValue: UseFormSetValue<Datatype>;
  pageNumberSET: number;
}

const ButtonsNavegation = (props: Props) => {
  const {
    pageNumber = 0,

    numberOfElements,
    totalElements,
    totalPages = 0,

    setValue,
  } = props;

  const handlePageMovement = (value: number) => {
    window.scrollTo({ top: 100, behavior: "smooth" });

    setValue("pageNumber", value);
  };

  const oneFoward = pageNumber + 1;
  const oneBackward = pageNumber - 1;
  const toFirstPage = 0;
  const toLastPage = totalPages - 1;

  return (
    <div className="flex flex-col mt-6 mb-2">
      <div className="flex flex-row justify-center   max-w-full mx-auto flex-wrap gap-1  mb-4">
        {pageNumber > 0 ? (
          <button
            className="btn  btn-circle  btn-outline  rounded-full ml-0.5 p-1  text-xs  "
            onClick={() => handlePageMovement(toFirstPage)}
            value={toFirstPage}
          >
            <ImageSwitch imageName="doubleArrowLeft" imageProperties="" />
          </button>
        ) : (
          <button
            className="btn btn-circle  btn-disabled btn-outline  rounded-full disabled ml-0.5   text-xs"
            value={toFirstPage}
          >
            <ImageSwitch imageName="doubleArrowLeft" imageProperties="" />
          </button>
        )}
        {pageNumber > 0 ? (
          <button
            className="btn btn-circle  btn-outline  rounded-full ml-0.5   text-xs "
            onClick={() => handlePageMovement(oneBackward)}
            value={oneBackward}
          >
            <ImageSwitch imageName="arrowLeft" imageProperties="" />
          </button>
        ) : (
          <button
            className="btn  btn-circle   btn-disabled  btn-outline  rounded-full disabled  ml-0.5  text-xs "
            value={oneBackward}
          >
            <ImageSwitch imageName="arrowLeft" imageProperties="" />
          </button>
        )}
        {totalPages < 5 ? (
          <div className="flex flex-row  ">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                className={`btn btn-circle btn-outline rounded-full ml-0.5 text-lg font-semibold transform transition-all duration-300 ${
                  pageNumber === i
                    ? "bg-blue-500 dark:bg-darkBlueShift-0 text-white" // Active page style
                    : "hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-400" // Inactive page style
                }`}
                key={i}
                onClick={() => handlePageMovement(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        ) : pageNumber < 4 ? (
          <div className="flex flex-row">
            {" "}
            {Array.from({ length: 5 }, (_, i) => (
              <button
                className={`btn btn-circle btn-outline rounded-full ml-0.5 text-lg font-semibold transform transition-all duration-300 ${
                  pageNumber === i
                    ? "bg-blue-500 dark:bg-darkBlueShift-0" // Active page style
                    : "hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-400" // Inactive page style
                }`}
                key={i}
                onClick={() => handlePageMovement(i)}
              >
                {i + 1}
              </button>
            ))}{" "}
            <p className="font-medium self-center pl-1 pr-1 ">...</p>
            <button
              className="btn btn-circle  btn-outline  rounded-full ml-0.5 text-lg font-semibold"
              onClick={() => handlePageMovement(totalPages - 1)}
            >
              {totalPages - 1}
            </button>
          </div>
        ) : pageNumber + 3 >= totalPages ? (
          <>
            <div className="flex flex-row">
              <button
                className="btn btn-circle  btn-outline  rounded-full ml-0.5 text-lg font-semibold "
                onClick={() => handlePageMovement(0)}
              >
                1
              </button>
              <p className="font-medium self-center pl-1 pr-1">...</p>
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  className={`btn btn-circle btn-outline rounded-full ml-0.5 text-lg font-semibold transform transition-all duration-300 ${
                    pageNumber == i + totalPages - 5
                      ? "bg-blue-500 dark:bg-darkBlueShift-0 text-white" // Active page style
                      : "hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-400" // Inactive page style
                  }`}
                  key={i}
                  onClick={() => handlePageMovement(i + totalPages - 5)}
                >
                  {i + totalPages - 5 + 1}
                </button>
              ))}{" "}
            </div>{" "}
          </>
        ) : (
          <div className="flex flex-row">
            <button
              className="btn btn-circle  btn-outline  rounded-full  ml-0.5 text-lg font-semibold "
              onClick={() => handlePageMovement(0)}
            >
              1
            </button>
            <p className="font-medium self-center pl-1 pr-1">...</p>
            {Array.from({ length: 3 }, (_, i) => (
              <button
                className={`btn btn-circle btn-outline rounded-full ml-0.5 text-lg font-semibold transform transition-all duration-300 ${
                  pageNumber === i + pageNumber - 1
                    ? "bg-blue-500 dark:bg-darkBlueShift-0 text-white" // Active page style
                    : "hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-400" // Inactive page style
                }`}
                key={i}
                onClick={() => handlePageMovement(i + pageNumber - 1)}
              >
                {i + pageNumber - 1}
              </button>
            ))}
            <p className="font-medium self-center pl-1 pr-1">...</p>
            <button
              className="btn btn-circle  btn-outline  rounded-full  ml-0.5 text-lg font-semibold "
              onClick={() => handlePageMovement(totalPages - 1)}
            >
              {totalPages - 1}
            </button>
          </div>
        )}
        {pageNumber < totalPages - 1 ? (
          <button
            className="btn btn-circle  btn-outline  rounded-full ml-0.5 text-lg font-semibold"
            onClick={() => handlePageMovement(oneFoward)}
            value={oneFoward}
          >
            <ImageSwitch imageName="arrowRight" imageProperties="" />
          </button>
        ) : (
          <button
            className="btn btn-circle    btn-disabled btn-outline ml-0.5 rounded-full disabled "
            value={oneFoward}
          >
            <ImageSwitch imageName="arrowRight" imageProperties="" />
          </button>
        )}
        {pageNumber < totalPages - 1 ? (
          <button
            className="btn btn-circle  btn-outline ml-0.5 rounded-full "
            onClick={() => handlePageMovement(toLastPage)}
            value={toLastPage}
          >
            <ImageSwitch imageName="doubleArrowRight" imageProperties="" />
          </button>
        ) : (
          <button
            className="btn  btn-circle   btn-disabled btn-outline ml-0.5 rounded-full disabled "
            value={toLastPage}
          >
            <ImageSwitch imageName="doubleArrowRight" imageProperties="" />
          </button>
        )}
      </div>
      <div className="self-center">
        <p className="text-lg font-semibold">
          Mostrando {numberOfElements} entradas de {totalElements}
        </p>
      </div>
    </div>
  );
};
export default ButtonsNavegation;
