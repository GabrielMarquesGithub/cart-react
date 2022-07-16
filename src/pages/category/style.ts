import styled from "styled-components";

export const Container = styled.main`
  margin: 2rem auto 0;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    align-self: flex-start;
    color: ${(props) => props.theme.theme.text};
    background: ${(props) => props.theme.theme.secondary};

    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    font-size: 1.1rem;

    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.theme.secondary};
      background: ${(props) => props.theme.theme.text};
    }
  }
  svg {
    transition: transform 0.4s;
  }
`;
export const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:
    minmax(20rem, max-content)
    repeat(auto-fill, 20rem) 100%;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 0 10rem;
`;
