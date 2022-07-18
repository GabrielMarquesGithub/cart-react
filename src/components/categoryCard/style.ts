import styled from "styled-components";
import { opacityAppear } from "../../assets/style/GlobalStyle";

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: capitalize;

  color: ${(props) => props.theme.theme.dark};

  transition: filter 0.2s;
`;
export const Container = styled.div`
  animation: ${opacityAppear} 1s;

  min-width: 25rem;
  min-height: 10rem;

  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.theme.white};
  border-radius: 2rem;

  transition: box-shadow 0.2s;

  img {
    max-height: 9rem;
    padding: 1rem;
  }
  &:hover {
    box-shadow: 2px 2px 20px ${(props) => props.theme.theme.black};
    ${TextContainer} {
      filter: brightness(1.4);
    }
  }
`;
