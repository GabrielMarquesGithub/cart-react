import styled from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  img {
    max-width: 100%;
    max-height: 5rem;
  }
`;
export const DetailsContainer = styled.div`
  cursor: default;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const TitleContainer = styled.div`
  cursor: default;
`;
export const ButtonsQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Container = styled.div`
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr 0.5fr 0.5fr;
  gap: 1rem;

  background: ${(props) => props.theme.theme.white};
  color: ${(props) => props.theme.theme.dark};
  border-bottom: 1px solid ${(props) => props.theme.theme.dark};

  padding: 1rem;

  &:last-child {
    border: none;
  }
`;
