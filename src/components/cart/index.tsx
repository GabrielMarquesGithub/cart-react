import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem";

import { CartBg, Container } from "./style";

function Cart() {
  const { state, actions } = useContext(CartContext);
  const products = state.items;

  const display = state.cartIsOpen ? { display: "flex" } : { display: "none" };

  const handleBackgroundClicked = () => actions?.changeState();

  console.log(actions?.changeState);
  return (
    <>
      <CartBg style={display} onClick={handleBackgroundClicked} />
      <Container style={display}>
        {products && products.map((product) => <CartItem {...product} />)}
      </Container>
    </>
  );
}
export default Cart;
