import axios from "axios";
import { Dispatch } from "redux";
import { GET_ALL_PRODUCTS, ERROR, TRIGGER_LOADING, GET_SINGLE_PRODUCT } from "../types";
import toast from "react-hot-toast";
import { Query } from "../components/Products";

//fetch all the products
export const getAllProducts =
  ({
    page,
    pageSize,
    searchText,
    productCategoryTypeIds,
    complianceTypeIds,
    sourceTypeIds,
  }: Query) =>
  async (dispatch: Dispatch) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body: string = JSON.stringify({
      page,
      pageSize,
      searchText,
      productCategoryTypeIds,
      complianceTypeIds,
      sourceTypeIds,
    });
    try {
      const res = await axios.post(
        "https://pfp-public-productdb-api.azurewebsites.net/api/product/search",
        body,
        config
      );
      toast.success("Data fetched Successfully");
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err: any) {
      if (err) toast.error(err.message);
      if (err.response.data) toast.error(JSON.stringify(err.response.data));
      dispatch({
        type: ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// filter by search

export const filterBysearch =
  ({
    page,
    pageSize,
    searchText,
    productCategoryTypeIds,
    complianceTypeIds,
    sourceTypeIds,
  }: Query) =>
  async (dispatch: Dispatch) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body: string = JSON.stringify({
      page,
      pageSize,
      searchText,
      productCategoryTypeIds,
      complianceTypeIds,
      sourceTypeIds,
    });
    try {
      //trigger the loading at the begining
      dispatch({
        type: TRIGGER_LOADING,
      });
      const res = await axios.post(
        "https://pfp-public-productdb-api.azurewebsites.net/api/product/search",
        body,
        config
      );
      console.log(res.data);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err: any) {
      if (err) toast.error(err.message);
      if (err.response.data) toast.error(JSON.stringify(err.response.data));
      dispatch({
        type: ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

//fget single product 
export const getSingleProduct = (id: number) => async (dispatch: Dispatch) => {
    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload : { id }
    })
}
