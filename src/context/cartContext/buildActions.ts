import { productsType } from "../../types/products";
import { actionKind } from "./actionTypes";
import { actionType, productsTypeReducer } from "./reducer";

type dispatchType = (action: actionType) => void;

export const buildAction = (dispatch: dispatchType) => {
  return {
    addItemToCart: (payload: productsType) =>
      dispatch({ type: actionKind.addItemToCart, payload: payload }),
    removeOneItemToCart: (payload: productsType) =>
      dispatch({ type: actionKind.removeOneItemToCart, payload: payload }),
    removeItemToCart: (payload: productsTypeReducer) =>
      dispatch({ type: actionKind.removeItemToCart, payload: payload }),
    cleanCart: () => dispatch({ type: actionKind.cleanCart }),
    changeState: () => dispatch({ type: actionKind.changeState }),
  };
};
