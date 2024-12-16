interface Props {
  offset: number | undefined;
  pageNumber: number | undefined;
  pageSize: number | undefined;
  totalPages: number | undefined;
  totalElements: number | undefined;
  numberOfElements: number | undefined;
  last: boolean | undefined;
  first: boolean | undefined;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumberSET: number;
}

const ButtonsNavegation = (props: Props) => {
  const {
    pageNumber = 0,

    pageSize,
    totalElements,
    totalPages = 0,

    setPageNumber,
  } = props;

  const handlePageMovement = (value: number) => {
    setPageNumber(value);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold  text-xs"
            >
              <path
                fillRule="evenodd"
                d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn btn-circle   btn-outline  rounded-full disabled ml-0.5   text-xs"
            value={toFirstPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold   text-xs "
            >
              <path
                fillRule="evenodd"
                d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {pageNumber > 0 ? (
          <button
            className="btn btn-circle  btn-outline  rounded-full ml-0.5   text-xs "
            onClick={() => handlePageMovement(oneBackward)}
            value={oneBackward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold   text-xs"
            >
              <path
                fillRule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn  btn-circle  btn-outline  rounded-full disabled  ml-0.5  text-xs "
            value={oneBackward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold   text-xs"
            >
              <path
                fillRule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 font-bold text-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn btn-circle  btn-outline ml-0.5 rounded-full disabled "
            value={oneFoward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold text-lg"
            >
              <path
                fillRule="evenodd"
                d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {pageNumber < totalPages - 1 ? (
          <button
            className="btn btn-circle  btn-outline ml-0.5 rounded-full "
            onClick={() => handlePageMovement(toLastPage)}
            value={toLastPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold text-lg"
            >
              <path
                fillRule="evenodd"
                d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn  btn-circle  btn-outline ml-0.5 rounded-full disabled "
            value={toLastPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 font-bold text-lg"
            >
              <path
                fillRule="evenodd"
                d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="self-center">
        <p className="text-lg font-semibold">
          Mostrando {pageSize} entradas de {totalElements}
        </p>
      </div>
    </div>
  );
};
export default ButtonsNavegation;
