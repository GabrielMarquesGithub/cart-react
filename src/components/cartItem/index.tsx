import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { productsType } from "../../types/products";
import { FaTrash } from "react-icons/fa";

import {
  ButtonsContainer,
  Container,
  DetailsContainer,
  ImgContainer,
} from "./style";

function CartItem(props: productsType) {
  const { title, description, image, price, id } = props;

  const { actions } = useContext(CartContext);
  const handleRemoveItemToCard = () => actions?.removeItemToCart(id);

  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={title} />
      </ImgContainer>
      <DetailsContainer>
        <span className="title">{title}</span>
        <span className="price">R${price}</span>
      </DetailsContainer>
      <ButtonsContainer>
        <FaTrash onClick={handleRemoveItemToCard} />
      </ButtonsContainer>
    </Container>
  );
}
export default CartItem;
