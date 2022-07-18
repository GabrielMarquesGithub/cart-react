import { productsType } from "../../types/products";

import { Container, DetailsContainer, ImgContainer } from "./style";

function ProductCard({ title, image, price }: productsType) {
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={title} />
      </ImgContainer>
      <DetailsContainer>
        <span className="title">{title}</span>
        <span className="price">R${price}</span>
      </DetailsContainer>
    </Container>
  );
}
export default ProductCard;
