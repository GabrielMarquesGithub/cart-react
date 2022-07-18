import styled from "styled-components";
import { BsFillLightbulbFill } from "react-icons/bs";
import { opacityAppear } from "../../assets/style/GlobalStyle";

export const Container = styled.header`
  position: relative;
  z-index: 2;
  height: 5rem;

  background: ${(props) => props.theme.theme.secondary};

  transition: background-color 0.3s;
`;
export const InternalContainer = styled.header`
  padding: 0 2rem;
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  animation: ${opacityAppear} 1.5s forwards;
  opacity: 0;

  height: 5rem;

  display: flex;
  align-items: center;

  h1 {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ButtonsContainer = styled.div`
  animation: ${opacityAppear} 1.5s forwards;
  opacity: 0;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 8rem;

  font-size: 1.5rem;

  svg {
    cursor: pointer;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .quantityItemsInCart {
    cursor: pointer;

    position: absolute;
    right: -15px;
    bottom: 20px;
    font-size: 0.8rem;

    background: ${(props) => props.theme.theme.text};
    color: ${(props) => props.theme.theme.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.15rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border-radius: 100%;
  }
`;
export const Light = styled(BsFillLightbulbFill)``;
