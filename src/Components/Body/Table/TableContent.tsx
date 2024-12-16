import { useQuery } from "@tanstack/react-query";

import { FilteredData, getUsersInfoFilter } from "../../../Lib/getUsersInfo";
import Cards from "../Cards/Cards";
import ButtonsNavegation from "../Buttons/ButtonsNavegation";
import React from "react";

interface Props {
  filteredData: FilteredData;
  pageSizeWatch: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const TableContent = (props: Props) => {
  const { filteredData, pageSizeWatch, pageNumber, setPageNumber } = props;

  const {
    data: ApiUser,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [filteredData, pageSizeWatch, pageNumber],
    queryFn: (context) => {
      const queryKey = context.queryKey as [FilteredData, number, number];
      return getUsersInfoFilter(queryKey);
    },
  });

  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="flex flex-col ">
          <span className="loading loading-dots w-32 self-center text-lightBlueShift-0 "></span>
        </div>
      ) : isError ? (
        <p className="pl-3 rounded-lg  bg-red-100 text-darkGrayOption-0 min-h-16 text-start items-center flex flex-row gap-1 text-lg font-semibold ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          No se encontraron resultados para la búsqueda ingresada. Por favor,
          intente con otros valores.
        </p>
      ) : ApiUser?.pagescontent.totalElements === 0 ? (
        <p
          className="pl-3 rounded-lg  bg-orange-100 
         min-h-16 text-start items-center flex flex-row gap-1 text-lg font-semibold text-darkGrayOption-0  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 md:size-8  text-orange-600 sm:self-center  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          No se encontraron resultados para la búsqueda ingresada. Por favor,
          intente con otros valores.
        </p>
      ) : (
        <div>
          <div className=" max-sm:hidden max-md:hidden mt-2 pb-2 block... bg-slate-50 dark:bg-darkGrayOption-0 rounded-lg ">
            <table className="table  dark:bg-darkGrayOption-0  bg-white ">
              <thead>
                <tr>
                  <td className=" text-xl font-bold text-darkGrayOption-0   dark:text-slate-300 ">
                    Apellido
                  </td>
                  <td className=" text-xl font-bold text-darkGrayOption-0   dark:text-slate-300">
                    Nombre
                  </td>
                  <td className="text-end text-xl font-bold text-darkGrayOption-0  dark:text-slate-300">
                    Perfil
                  </td>
                </tr>
              </thead>

              <tbody>
                {ApiUser?.content.map((ApiResult) => {
                  return (
                    <React.Fragment key={ApiResult.id}>
                      <tr>
                        <td colSpan={3}>
                          <div className="divider divider-end  mt-0 mb-0"></div>
                        </td>
                      </tr>
                      <tr className="font-medium text-lg">
                        <td>{ApiResult.lastname}</td>
                        <td>{ApiResult.name}</td>
                        <td className="text-end">{ApiResult.profile.name}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="block md:hidden lg:hidden m-2">
            <div>
              {ApiUser?.content.map((ApiUser) => {
                return <Cards ApiUser={ApiUser} key={ApiUser.id}></Cards>;
              })}
            </div>
          </div>

          <ButtonsNavegation
            pageNumber={ApiUser?.pagescontent.pageNumber}
            pageSize={ApiUser?.pagescontent.pageSize}
            numberOfElements={ApiUser?.pagescontent.numberOfElements}
            last={ApiUser?.pagescontent.last}
            first={ApiUser?.pagescontent.first}
            totalElements={ApiUser?.pagescontent.totalElements}
            totalPages={ApiUser?.pagescontent.totalPages}
            offset={ApiUser?.pagescontent.offset}
            setPageNumber={setPageNumber}
            pageNumberSET={pageNumber}
          ></ButtonsNavegation>
        </div>
      )}
    </div>
  );
};
export default TableContent;
