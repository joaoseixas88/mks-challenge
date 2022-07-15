import { Reducer } from "redux";
import { ProductsState, ProductsTypes } from "./types";

const initialState: ProductsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsTypes.PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.PRODUCTS_SUCCESS:
			
      return {
				...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case ProductsTypes.PRODUCTS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer 
