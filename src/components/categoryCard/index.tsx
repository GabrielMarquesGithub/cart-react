import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productsType } from "../../types/products";
import Loading from "../loading";

import { Container, TextContainer } from "./style";

type CategoryCardPropsType = {
  category: string;
};

const params = {
  limit: "1",
};

function CategoryCard({ category }: CategoryCardPropsType) {
  const [product, setProduct] = useState<productsType | null>(null);
  const { data, loading } = useFetch<productsType[]>(
    `/products/category/${category}`,
    params
  );

  useEffect(() => {
    if (data) setProduct(data[0]);
  }, [data]);
  return (
    <Link to={`/category/${category}`}>
      <Container>
        {loading && <Loading />}
        {!loading && product && (
          <>
            <TextContainer>
              <h3>{category}</h3>
            </TextContainer>
            <img src={product.image} alt={product.title} />
          </>
        )}
      </Container>
    </Link>
  );
}
export default CategoryCard;
