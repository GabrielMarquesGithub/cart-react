import { useEffect, useState } from "react";
import Category from "../../components/categoryCard";
import Loading from "../../components/loading";
import { useFetch } from "../../hooks/useFetch";
import bannerImg from "../../assets/img/Frame.svg";

import { BannerContainer, CategoriesContainer, Container } from "./style";

type dataType = string[];

function Home() {
  const [categories, setCategories] = useState<dataType | null>(null);
  const { data, loading } = useFetch<dataType>("/products/categories");

  useEffect(() => {
    if (data) setCategories(data);
  }, [data]);

  return (
    <>
      <BannerContainer>
        <div className="text">
          <h2>Cart System</h2>
          <span>
            Teste o Cart app, sistema focado nas tarefas de carrinho de compra
            utilizando o ReactJS
          </span>
        </div>
        <img src={bannerImg} alt="Mulher utilizando smartphone" />
      </BannerContainer>
      <Container>
        {loading && <Loading />}
        <CategoriesContainer>
          {!loading &&
            categories &&
            categories.map((category) => (
              <Category key={category} category={category} />
            ))}
        </CategoriesContainer>
      </Container>
    </>
  );
}
export default Home;
