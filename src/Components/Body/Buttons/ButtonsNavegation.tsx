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
    pageNumber,

    pageSize,
    totalElements,
    totalPages,

    last,
    first,
    setPageNumber,
    pageNumberSET,
  } = props;
  console.log("last   ", last, "    ", first, "  first");

  const handlePageMovement = (value: number) => {
    console.log("something");
    setPageNumber(value);
    console.log(pageNumberSET);
  };

  const oneFoward = pageNumber + 1;
  const oneBackward = pageNumber - 1;
  const toFirstPage = 0;
  const toLastPage = totalPages - 1;

  const handleAdjacentLogic = (value: number) => {};
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        {pageNumber > 0 ? (
          <button
            className="btn btn-circle"
            onClick={() => handlePageMovement(toFirstPage)}
            value={toFirstPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
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
            className="btn  btn-ghost rounded-full disabled"
            value={toFirstPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {pageNumber > 0 ? (
          <button
            className="btn btn-circle"
            onClick={() => handlePageMovement(oneBackward)}
            value={oneBackward}
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn  btn-ghost rounded-full disabled  "
            value={oneBackward}
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {totalPages < 5 ? (
          <div className="flex flex-row ">
            {" "}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                className="btn btn-circle"
                key={i}
                onClick={() => handlePageMovement(i)}
              >
                {i + 1}
              </button>
            ))}{" "}
          </div>
        ) : pageNumber < 4 ? (
          <div className="flex flex-row">
            {" "}
            {Array.from({ length: 5 }, (_, i) => (
              <button
                className="btn btn-circle"
                key={i}
                onClick={() => handlePageMovement(i)}
              >
                {i + 1}
              </button>
            ))}{" "}
          </div>
        ) : pageNumber + 3 >= totalPages ? (
          <>
            <div className="flex flex-row">
              {" "}
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  className="btn btn-circle"
                  key={i - 5}
                  onClick={() => handlePageMovement(i + totalPages - 5)}
                >
                  {i + totalPages - 5}
                </button>
              ))}{" "}
            </div>
          </>
        ) : (
          <div className="flex flex-row">
            {" "}
            {Array.from({ length: 3 }, (_, i) => (
              <button
                className="btn btn-circle"
                key={i - 1}
                onClick={() => handlePageMovement(i + pageNumber - 1)}
              >
                {i + pageNumber - 1}
              </button>
            ))}{" "}
          </div>
        )}

        {pageNumber < totalPages - 1 ? (
          <button
            className="btn btn-circle"
            onClick={() => handlePageMovement(oneFoward)}
            value={oneFoward}
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            className="btn  btn-ghost rounded-full disabled"
            value={oneFoward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
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
            className="btn btn-circle"
            onClick={() => handlePageMovement(toLastPage)}
            value={toLastPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
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
            className="btn  btn-ghost rounded-full disabled"
            value={toLastPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
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
      <div>
        <p>
          Mostrando {pageSize} entradas de {totalElements}
        </p>
      </div>
    </div>
  );
};
export default ButtonsNavegation;
