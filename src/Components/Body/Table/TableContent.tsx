import { useQuery } from "@tanstack/react-query";

import { FilteredData, getUsersInfoFilter } from "../../../lib/getUsersInfo";
import Cards from "../Cards/Cards";
import ButtonsNavegation from "../Buttons/ButtonsNavegation";
import React from "react";
import ImageSwitch from "../../ImageSwitch/ImageSwitch";
import { UseFormSetValue } from "react-hook-form";

interface Datatype {
  pageSize: number;
  pageNumber: number;
  name: string;
  lastname: string;
  profile: string;
}

interface Props {
  unfilteredData: [string, string, string];
  pageSizeWatch: number;
  setValue: UseFormSetValue<Datatype>;
  pageNumber: number;
}

const TableContent = (props: Props) => {
  const { unfilteredData, pageSizeWatch, pageNumber, setValue } = props;

  const filteredData = {
    lastname: unfilteredData[1].toString(),
    name: unfilteredData[0].toString(),
    profile: unfilteredData[2].toString(),
  };

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
          <ImageSwitch imageName="errorMessage" imageProperties="" />
          No se encontraron resultados para la búsqueda ingresada. Por favor,
          intente con otros valores.
        </p>
      ) : ApiUser?.pagescontent.totalElements === 0 ? (
        <p
          className="pl-3 rounded-lg  bg-orange-100 
         min-h-16 text-start items-center flex flex-row gap-1 text-lg font-semibold text-darkGrayOption-0  "
        >
          <ImageSwitch imageName="warningMessage" imageProperties="" />
          No se encontraron resultados para la búsqueda ingresada. Por favor,
          intente con otros valores.
        </p>
      ) : (
        <div>
          <div className=" max-sm:hidden max-md:hidden mt-2 pt-4 pb-2 block... bg-slate-50 dark:bg-darkGrayOption-0 rounded-lg ">
            <table className="table  dark:bg-darkGrayOption-0  bg-white  ">
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
                        <td colSpan={3} className="p-0 m-0">
                          <div className="divider divider-end p-0  mt-0 mb-0  "></div>
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
            setValue={setValue}
            pageNumberSET={pageNumber}
          ></ButtonsNavegation>
        </div>
      )}
    </div>
  );
};
export default TableContent;
