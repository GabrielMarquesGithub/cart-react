import { productsType } from "../../types/products";
import { actionKind } from "./actionTypes";
import { actionType, productsTypeReducer, stateType } from "./reducer";

type dispatchType = (action: actionType) => void;

export const buildAction = (state: stateType, dispatch: dispatchType) => {
  return {
    addItemToCart: (payload: productsType | productsTypeReducer) =>
      addItem(payload, state.items ? state.items : [], dispatch),
    removeOneItemToCart: (payload: productsType | productsTypeReducer) =>
      removeItem(payload, state.items ? state.items : [], dispatch),
    removeItemToCart: (payload: productsTypeReducer) =>
      dispatch({ type: actionKind.removeItemToCart, payload: payload }),
    cleanCart: () => dispatch({ type: actionKind.cleanCart }),
    changeState: () => dispatch({ type: actionKind.changeState }),
  };
};
const addItem = (
  payload: productsType,
  stateItems: productsTypeReducer[],
  dispatch: dispatchType
) => {
  const product = stateItems.find(
    (item) => item.id === payload.id
  ) as productsTypeReducer;
  if (product) {
    product.quantity!++;
    dispatch({
      type: actionKind.setCartItems,
      payload: { products: stateItems, quantity: 1 },
    });
  } else {
    const newProducts = [...stateItems, { ...payload, quantity: 1 }];
    dispatch({
      type: actionKind.setCartItems,
      payload: { products: newProducts, quantity: 1 },
    });
  }
};
const removeItem = (
  payload: productsTypeReducer,
  stateItems: productsTypeReducer[],
  dispatch: dispatchType
) => {
  const product = stateItems.find(
    (item) => item.id === payload.id
  ) as productsTypeReducer;
  if (product.quantity! > 1) {
    product.quantity!--;
    dispatch({
      type: actionKind.setCartItems,
      payload: { products: stateItems, quantity: -1 },
    });
  } else {
    dispatch({
      type: actionKind.removeItemToCart,
      payload: product,
    });
  }
};
