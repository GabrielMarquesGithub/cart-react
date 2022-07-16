import { createContext, ReactNode, useReducer, useRef, Reducer } from "react";
import { productsType } from "../../types/products";
import { buildAction } from "./buildActions";
import { actionType, reducer, stateType } from "./reducer";

type actionsType = {
  addItemToCart: (payload: productsType) => void;
  removeOneItemToCart: (payload: productsType) => void;
  removeItemToCart: (payload: number) => void;
  cleanCart: () => void;
  changeState: () => void;
};
type cartContextType = {
  state: stateType;
  actions: actionsType | null;
};

const initialReducerValue: stateType = {
  items: null,
  itemsQuantity: 0,
  cartIsOpen: false,
};

export const CartContext = createContext<cartContextType>({
  state: initialReducerValue,
  actions: null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<stateType, actionType>>(
    reducer,
    initialReducerValue
  );
  const actions = useRef(buildAction(dispatch));
  return (
    <CartContext.Provider value={{ state, actions: actions.current }}>
      {children}
    </CartContext.Provider>
  );
};
