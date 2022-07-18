import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { FaTrash } from "react-icons/fa";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { productsTypeReducer } from "../../context/cartContext/reducer";

import {
  ButtonsContainer,
  ButtonsQuantityContainer,
  Container,
  DetailsContainer,
  ImgContainer,
  TitleContainer,
} from "./style";

function CheckoutItem(props: productsTypeReducer) {
  const { title, quantity, image, price } = props;

  const { actions } = useContext(CartContext);
  const handleRemoveItemToCard = () => actions?.removeItemToCart(props);
  const handleIncreaseQuantity = () => actions?.addItemToCart(props);
  const handleDecreaseQuantity = () => actions?.removeOneItemToCart(props);

  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={title} />
      </ImgContainer>
      <TitleContainer>
        <span className="name">{title}</span>
      </TitleContainer>
      <DetailsContainer>
        <span className="price">R${price * quantity!}</span>
        <ButtonsQuantityContainer>
          <BiLeftArrow onClick={handleDecreaseQuantity} />
          {quantity}
          <BiRightArrow onClick={handleIncreaseQuantity} />
        </ButtonsQuantityContainer>
      </DetailsContainer>
      <ButtonsContainer>
        <FaTrash onClick={handleRemoveItemToCard} />
      </ButtonsContainer>
    </Container>
  );
}
export default CheckoutItem;
