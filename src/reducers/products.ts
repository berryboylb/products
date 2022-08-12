import {
  ERROR,
  GET_ALL_PRODUCTS,
  TRIGGER_LOADING,
  GET_SINGLE_PRODUCT,
} from "../types";

export type InitialState = {
  id: number | null;
  results: any[];
  singleResult: any;
  currentPage: number | null;
  pageCount: number | null;
  pageSize: number | null;
  rowCount: number | null;
  loading: boolean | null;
  error: { msg: string; status: number } | {};
};

const initialState: InitialState = {
  id: null,
  results: [],
  singleResult: {},
  currentPage: null,
  pageCount: null,
  pageSize: null,
  rowCount: null,
  loading: true,
  error: {},
};

export default function products(
  state: InitialState = initialState,
  action: { type: string; payload: InitialState }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        results: payload.results,
        currentPage: payload.currentPage,
        pageCount: payload.pageCount,
        pageSize: payload.pageSize,
        rowCount: payload.rowCount,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case TRIGGER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleResult: state.results.map((item) => item.id === payload.id && item )
      };
    default:
      return state;
  }
}
