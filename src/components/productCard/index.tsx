import { useCallback, useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { productsType } from "../../types/products";

import {
  ButtonsContainer,
  Container,
  DetailsContainer,
  ImgContainer,
} from "./style";

function ProductCard(props: productsType) {
  const { title, description, image, price } = props;
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const divOpen = descriptionOpen ? { display: "inline" } : { display: "none" };
  const handleOpenDescription = () => setDescriptionOpen(!descriptionOpen);
  const handleMouseLeaveContainer = () => setDescriptionOpen(false);

  const { actions } = useContext(CartContext);
  const handleAddItemToCard = () => actions?.addItemToCart(props);

  return (
    <Container onMouseLeave={handleMouseLeaveContainer}>
      <ImgContainer>
        <img src={image} alt={title} />
      </ImgContainer>
      <DetailsContainer>
        <span className="title">{title}</span>
        <span className="price">R${price}</span>
        <span className="description" style={divOpen}>
          {description}
        </span>
      </DetailsContainer>
      <ButtonsContainer>
        <button onClick={handleOpenDescription}>Details</button>
        <button className="add" onClick={handleAddItemToCard}>
          Add
        </button>
      </ButtonsContainer>
    </Container>
  );
}
export default ProductCard;
