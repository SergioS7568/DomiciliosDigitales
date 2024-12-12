import { transformedRequestedDataType } from "./GetUsersFormat";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export interface FilteredData {
  name: string;
  lastname: string;
  profile: string;
}

export const getUsersInfo = async (queryKey: [pageSize: number]) => {
  console.log(" you are in the api ");

  const [size] = queryKey;
  console.log(" 1 ");
  const searchParams = new URLSearchParams();
  const paging = "paging";
  console.log(" 2 ");
  if (size && size > 0) {
    searchParams.append("", `0,${size}`);
    const urlBackendAndPage = `${BACKEND_URL}${paging}${searchParams.toString()}`;
    console.log(" 3 ");
    console.log(" urlBackendAndPage      " + urlBackendAndPage);
    console.log(" 4 ");
    const resultado = await fetch(urlBackendAndPage);
    console.log(" 5 ");
    if (!resultado.ok) {
      throw new Error("Ocurrio un Problema, mensaje Obligatorio");
    }
    console.log(" 6 ");
    const data = await resultado.json();
    const datatransformed = transformedRequestedDataType(data.data);
    console.log("datatransformed   ", datatransformed);
    return datatransformed;
  } else {
    searchParams.append("", `0,15`);
    const urlBackendAndPage = `${BACKEND_URL}${paging}${searchParams.toString()}`;
    console.log(" 7 ");
    console.log(" urlBackendAndPage      " + urlBackendAndPage);
    console.log(" 8 ");
    const resultado = await fetch(urlBackendAndPage);
    console.log(" 9 ");
    if (!resultado.ok) {
      throw new Error("Ocurrio un Problema, mensaje Obligatorio");
    }
    console.log(" 10 ");
    const data = await resultado.json();
    const datatransformed = transformedRequestedDataType(data.data);
    console.log("datatransformed   ", datatransformed);
    return datatransformed;
  }

  console.log(" 11 ");
  const emptyResult = size;
  console.log(" 12 ");
  return emptyResult;
};
