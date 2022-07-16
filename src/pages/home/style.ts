import styled from "styled-components";

export const Container = styled.main`
  min-height: 80vh;
  margin: 0 auto;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CategoriesContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 2rem;
`;
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  background: linear-gradient(90deg, #1f618d 30%, #f8c471 70%);

  border-bottom: 2px solid ${(props) => props.theme.theme.text};
  img {
    width: 50rem;
  }
  .text {
    color: ${(props) => props.theme.theme.white};

    font-size: 2rem;
    h2 {
      margin-bottom: 2rem;
    }
  }
`;
