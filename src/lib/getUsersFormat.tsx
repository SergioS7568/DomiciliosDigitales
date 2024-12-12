export interface Welcome {
  success: boolean;
  data: Data;
  message: null;
}

export interface Data {
  content: dataTable[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface dataTable {
  id: number;
  name: string;
  lastname: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  name: string;
}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface RequestedData {
  content: {
    id: number;
    name: string;
    lastname: string;
    profile: { id: number; name: string };
  }[];

  pagescontent: {
    empty: boolean;
    offset: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    last: boolean;
    first: boolean;
  };
}

export const transformedRequestedDataType = (data: Data): RequestedData => {
  return {
    content: data.content.map((result) => ({
      id: result.id,
      name: result.name,
      lastname: result.lastname,
      profile: {
        id: result.profile.id,
        name: result.profile.name,
      },
    })),
    pagescontent: {
      empty: data.sort.empty,
      offset: data.pageable.offset,
      pageNumber: data.pageable.pageNumber,
      pageSize: data.pageable.pageSize,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      numberOfElements: data.numberOfElements,
      last: data.last,
      first: data.first,
    },
  };
};
