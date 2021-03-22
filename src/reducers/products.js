import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from "../constants/ActionTypes";

const initialState = {
  items: [],
  loading: false,
};

export default function productsReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case FETCH_DATA_START:
      console.log("FETCH_DATA_START", action);
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      console.log("FETCH_DATA_SUCCESS", action);
      return {
        ...state,
        items: action.payload.data.sort(sortProducts),
        loading: false
      };
    case FETCH_DATA_FAILED:
      console.log("FETCH_DATA_FAILED", action);
      return { ...state, loading: false };

    default:
      return state;
  }
}

function sortProducts(a,b){
  var saleA = !!a.sale;
  var saleB = !!b.sale;

  if (!saleA && saleB) return 1;

  if (saleA && !saleB) return -1;

  return 0
}
