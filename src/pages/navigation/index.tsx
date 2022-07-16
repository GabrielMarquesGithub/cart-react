import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import Cart from "../../components/cart";
import { CartContext } from "../../context/cartContext";

import {
  ButtonsContainer,
  Container,
  InternalContainer,
  Light,
  LogoContainer,
} from "./style";

function Navigation() {
  const { changeTheme } = useTheme();
  const { actions } = useContext(CartContext);

  const handleCartOpen = () => actions?.changeState();

  return (
    <>
      <Container>
        <InternalContainer>
          <LogoContainer>
            <Link to="/">
              <h1>Cart</h1>
            </Link>
          </LogoContainer>
          <ButtonsContainer>
            <Light onClick={changeTheme} />
            <FiShoppingCart onClick={handleCartOpen} />
            <Cart />
          </ButtonsContainer>
        </InternalContainer>
      </Container>
      <Outlet />
    </>
  );
}
export default Navigation;
