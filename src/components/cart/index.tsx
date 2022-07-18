import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem";

import { CartBg, Container, ItemContainer } from "./style";

function Cart() {
  const { state, actions } = useContext(CartContext);
  const products = state.items;

  const display = state.cartIsOpen ? { display: "flex" } : { display: "none" };

  const handleChangeCartState = () => actions?.changeState();

  return (
    <>
      <CartBg style={display} onClick={handleChangeCartState} />
      <Container style={display}>
        <h3 className="cartTitle">Products</h3>
        <ItemContainer>
          {!products?.length && (
            <h4 className="defaultMessage">Carrinho vazio :3</h4>
          )}
          {products &&
            products.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
        </ItemContainer>
        {!!products?.length && (
          <Link onClick={handleChangeCartState} to="/checkout">
            Checkout
          </Link>
        )}
      </Container>
    </>
  );
}
export default Cart;
