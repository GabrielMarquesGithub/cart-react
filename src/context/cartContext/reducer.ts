import { productsType } from "../../types/products";
import { actionKind } from "./actionTypes";

export type stateType = {
  items: productsType[] | null;
  itemsQuantity: number;
  cartIsOpen: boolean;
};
export type actionType =
  | {
      type: actionKind.addItemToCart;
      payload: productsType;
    }
  | {
      type: actionKind.removeOneItemToCart;
      payload: productsType;
    }
  | {
      type: actionKind.removeItemToCart;
      payload: number;
    }
  | {
      type: actionKind.cleanCart;
      payload?: unknown;
    }
  | {
      type: actionKind.changeState;
      payload?: unknown;
    };

export function reducer(state: stateType, action: actionType) {
  state.itemsQuantity = state.items ? state.items.length : 0;
  const { type, payload } = action;
  switch (type) {
    case actionKind.addItemToCart:
      return {
        ...state,
        items: addItem(state.items ? state.items : [], payload),
      };
    case actionKind.removeOneItemToCart:
      return {
        ...state,
        items: removeOneItem(state.items ? state.items : [], payload),
      };
    case actionKind.removeItemToCart:
      return {
        ...state,
        items: removeItem(state.items ? state.items : [], payload),
      };
    case actionKind.cleanCart:
      return {
        ...state,
        items: null,
      };
    case actionKind.changeState:
      return {
        ...state,
        cartIsOpen: state.cartIsOpen ? false : true,
      };
    default:
      return { ...state };
  }
}
const addItem = (items: productsType[], itemForAdd: productsType) => {
  if (itemForAdd.quantity) {
    itemForAdd.quantity++;
    return items;
  }
  items.push(itemForAdd);
  return items;
};
const removeOneItem = (items: productsType[], itemForRemove: productsType) => {
  if (itemForRemove.quantity > 1) {
    itemForRemove.quantity--;
    return items;
  }
  return removeItem(items, itemForRemove.id);
};
const removeItem = (items: productsType[], idForRemove: number) =>
  items.filter((item) => item.id !== idForRemove);
