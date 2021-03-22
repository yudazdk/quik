import * as types from "../constants/ActionTypes";
import request from "../lib/request";

export function fetchData() {
  return function (dispatch) {
    dispatch(fetchDataStarted());

    return request()
      .then(
        (data) => dispatch(fetchDataSuccess(data)),
        (error) => dispatch(fetchDataFailed(error))
      );
  };
}

export const fetchDataStarted = (payload) => ({
  type: types.FETCH_DATA_START,
  payload
});
export const fetchDataSuccess = (payload) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload
});
export const fetchDataFailed = (payload) => ({
  type: types.FETCH_DATA_FAILED,
  payload
});
export const addItem = (payload) => ({
  type: types.ADD_ITEM,
  payload
});
export const removeItem = (payload) => ({
  type: types.REMOVE_ITEM,
  payload
});
