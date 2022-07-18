import { productsType } from "../../types/products";
import { actionKind } from "./actionTypes";

export type stateType = {
  items: productsTypeReducer[] | null;
  itemsQuantity: number;
  cartIsOpen: boolean;
};
export type productsTypeReducer = productsType & { quantity?: number };
export type actionType =
  | {
      type: actionKind.addItemToCart;
      payload: productsTypeReducer;
    }
  | {
      type: actionKind.removeOneItemToCart;
      payload: productsTypeReducer;
    }
  | {
      type: actionKind.removeItemToCart;
      payload: productsTypeReducer;
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
  const { type, payload } = action;
  switch (type) {
    case actionKind.addItemToCart:
      if (state.items?.some((item) => item.id === payload.id)) {
        return {
          ...state,
          itemsQuantity: state.itemsQuantity++,
          items: state.items?.map((itemMap) =>
            itemMap.id === payload.id
              ? { ...itemMap, quantity: itemMap.quantity!++ }
              : itemMap
          ),
        };
      }
      const newItem = { ...payload, quantity: 1 };
      return {
        ...state,
        itemsQuantity: state.itemsQuantity++,
        items: state.items ? [...state.items, newItem] : [newItem],
      };
    case actionKind.removeOneItemToCart:
      if (payload.quantity! > 1) {
        return {
          ...state,
          itemsQuantity: state.itemsQuantity--,
          items: state.items!.map((itemMap) =>
            itemMap.id === payload.id
              ? { ...itemMap, quantity: itemMap.quantity!-- }
              : itemMap
          ),
        };
      }
      return {
        ...state,
        itemsQuantity: state.itemsQuantity--,
        items: state.items!.filter((item) => item.id !== payload.id),
      };
    case actionKind.removeItemToCart:
      return {
        ...state,
        itemsQuantity: state.itemsQuantity - payload.quantity!,
        items: state.items!.filter((item) => item.id !== payload.id),
      };
    case actionKind.cleanCart:
      return {
        ...state,
        itemsQuantity: 0,
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
