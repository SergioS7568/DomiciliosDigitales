import { transformedRequestedDataType } from "./getUsersFormat";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export interface FilteredData {
  lastname: string;
  name: string;
  profile: string;
}

export const getUsersInfoFilter = async (
  queryKey: [filteredData: FilteredData, pageSize: number, pageNumber: number]
) => {
  const [datafilter, size, position] = queryKey;

  const searchParams = new URLSearchParams();

  if (size && size > 0) {
    let filterselect = "";
    if (
      datafilter.lastname.trim() ||
      datafilter.name.trim() ||
      datafilter.profile.trim()
    ) {
      if (datafilter.name && datafilter.name.trim()) {
        filterselect += `name:${datafilter.name},`;
      }
      if (datafilter.lastname && datafilter.lastname.trim()) {
        filterselect += `lastname:${datafilter.lastname},`;
      }
      if (datafilter.profile && datafilter.profile.trim()) {
        filterselect += `profile.name:${datafilter.profile},`;
      }
      filterselect += `&`;
    } else {
      filterselect += `&`;
    }

    searchParams.append("paging", `${position},${size}`);
    searchParams.append("sort", `lastname:asc`);

    const urlBackendAndPage = `${BACKEND_URL}search=${filterselect}${searchParams.toString()}`;

    const resultado = await fetch(urlBackendAndPage);

    if (!resultado.ok) {
      throw new Error("Ocurrio un Problema, mensaje Obligatorio");
    }

    const data = await resultado.json();
    const datatransformed = transformedRequestedDataType(data.data);

    return datatransformed;
  } else {
    searchParams.append("paging", `0,15`);
    const urlBackendAndPage = `${BACKEND_URL}${searchParams.toString()}`;

    const resultado = await fetch(urlBackendAndPage);

    if (!resultado.ok) {
      throw new Error("Ocurrio un Problema, mensaje Obligatorio");
    }

    const data = await resultado.json();
    const datatransformed = transformedRequestedDataType(data.data);

    return datatransformed;
  }
};
