import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading";
import ProductCard from "../../components/productCard";
import { useFetch } from "../../hooks/useFetch";
import { productsType } from "../../types/products";
import { MdOutlineArrowDropUp } from "react-icons/md";

import { Container, FilterContainer, ProductsContainer } from "./style";

const defaultParams = {
  limit: "20",
  sort: "asc",
};

function Category() {
  const [products, setProducts] = useState<productsType[] | null>(null);
  const [params, setParams] = useState(defaultParams);

  const { category } = useParams();

  const { data, loading } = useFetch<productsType[]>(
    `/products/category/${category}`,
    params
  );

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);
  useEffect;

  const handleChangeFilter = () =>
    setParams({ ...params, sort: params.sort === "asc" ? "desc" : "asc" });
  const styleRotateArrowFilter = { transform: "rotate(180deg)" };

  return (
    <Container>
      <FilterContainer>
        <button disabled={loading} onClick={handleChangeFilter}>
          $
          <MdOutlineArrowDropUp
            style={params.sort === "desc" ? styleRotateArrowFilter : {}}
          />
        </button>
      </FilterContainer>

      {loading && <Loading />}

      <ProductsContainer>
        {!loading &&
          products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </ProductsContainer>
    </Container>
  );
}
export default Category;
