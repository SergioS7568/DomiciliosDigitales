import { useQuery } from "@tanstack/react-query";
import { FilteredData, getUsersInfoFilter } from "../../../Lib/getUsersInfo";
import { useState } from "react";

interface Props {
  filteredData: FilteredData;
  pageSizeWatch: number;
  pageNumber: number;
}

const TableContent = (props: Props) => {
  const { filteredData, pageSizeWatch, pageNumber } = props;

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
    <div>
      <h1>{filteredData.lastname} apellido</h1>
      <h1>{filteredData.name} nombre</h1>
      <h1>{filteredData.profile} perfil</h1>
      <h1>{pageSizeWatch}</h1>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <td>Apellido</td>
            <td>Nombre</td>
            <td>Perfil</td>
          </tr>
        </thead>
        <tbody>
          {ApiUser?.content.map((ApiResult) => {
            return (
              <tr key={ApiResult.id}>
                <td> </td>
                <td> {ApiResult.lastname}</td>

                <td> {ApiResult.name}</td>

                <td> {ApiResult.profile.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableContent;
