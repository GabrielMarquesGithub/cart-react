import styled from "styled-components";
import { opacityAppear } from "../../assets/style/GlobalStyle";

export const ImgContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  min-height: 10rem;

  img {
    max-width: 100%;
    max-height: 8rem;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transition: filter 0.2s;

  span {
    &.title {
      cursor: default;

      font-size: 0.9rem;
      width: 60%;
      //para esconder overflow de text
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.description {
      cursor: default;

      border-radius: 1rem;

      margin: 1rem;
      padding: 1rem;
      border: 1rem solid ${(props) => props.theme.theme.dark};
      max-height: 11rem;

      position: absolute;
      top: 0;
      left: 0;

      overflow: auto;

      color: ${(props) => props.theme.theme.white};
      background: ${(props) => props.theme.theme.dark};

      &::-webkit-scrollbar {
        border-radius: 1rem;
        width: 0.4rem;
        background: ${(props) => props.theme.theme.white};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: ${(props) => props.theme.theme.light};
      }
    }
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;

    width: 45%;

    padding: 0.25rem;
    border: 2px solid ${(props) => props.theme.theme.dark};
    border-radius: 0.5rem;

    color: ${(props) => props.theme.theme.dark};
    background: ${(props) => props.theme.theme.white};

    &:hover {
      filter: brightness(1.3);
    }
    &.add {
      color: ${(props) => props.theme.theme.white};
      background: ${(props) => props.theme.theme.dark};
    }
  }
`;
export const Container = styled.div`
  animation: ${opacityAppear} 1s;
  position: relative;

  display: flex;
  flex-direction: column;
  //para evitar quebra no layout por utilizar nowrap
  min-width: 0;
  gap: 1rem;

  padding: 2rem;
  background: ${(props) => props.theme.theme.white};
  color: ${(props) => props.theme.theme.dark};
  border-radius: 1rem;

  transition: box-shadow 0.2s;
  &:hover {
    z-index: 1;
    box-shadow: 2px 2px 20px ${(props) => props.theme.theme.black};
    ${DetailsContainer} {
      .title {
        white-space: normal;
        overflow: visible;
      }
    }
  }
`;
