import { useQuery } from "@tanstack/react-query";

import { FilteredData, getUsersInfoFilter } from "../../../Lib/getUsersInfo";
import Cards from "../Cards/Cards";
import ButtonsNavegation from "../Buttons/ButtonsNavegation";

interface Props {
  filteredData: FilteredData;
  pageSizeWatch: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const TableContent = (props: Props) => {
  const { filteredData, pageSizeWatch, pageNumber, setPageNumber } = props;
  console.log("page number is ...", pageNumber);
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
      <div className=" max-sm:hidden max-md:hidden  block...">
        <table className="table">
          <thead>
            <tr>
              <td>Apellido</td>
              <td>Nombre</td>
              <td>Perfil</td>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td>Cargando datos</td>
              </tr>
            ) : isError ? (
              <tr>
                <td>Algo salio mal :/ </td>
              </tr>
            ) : ApiUser?.pagescontent.totalElements === 0 ? (
              <tr>
                <td>no value inside </td>
              </tr>
            ) : (
              ApiUser?.content.map((ApiResult) => {
                return (
                  <tr key={ApiResult.id}>
                    <td> {ApiResult.lastname}</td>

                    <td> {ApiResult.name}</td>

                    <td> {ApiResult.profile.name}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="block md:hidden lg:hidden m-2">
        {isLoading ? (
          <p>Cargando datos</p>
        ) : isError ? (
          <p>Algo salio mal :/ </p>
        ) : ApiUser?.pagescontent.totalElements === 0 ? (
          <p>no value inside </p>
        ) : (
          <div>
            {ApiUser?.content.map((ApiUser) => {
              return <Cards ApiUser={ApiUser} key={ApiUser.id}></Cards>;
            })}
          </div>
        )}
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
  );
};
export default TableContent;
