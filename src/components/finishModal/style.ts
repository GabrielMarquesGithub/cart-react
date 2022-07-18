import styled from "styled-components";
import { opacityAppear } from "../../assets/style/GlobalStyle";

export const Container = styled.div`
  animation: ${opacityAppear} 0.5s forwards;

  color: ${(props) => props.theme.theme.dark};
  background: ${(props) => props.theme.theme.white};
  width: 40rem;
  min-height: 10rem;

  border-radius: 1rem;
  box-shadow: 2px 2px 10px black;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  div {
    &.text {
      text-align: center;
      font-weight: bold;
      font-size: 1.4rem;

      a {
        color: ${(props) => props.theme.theme.green};
      }
    }
    &.buttons {
      button {
        width: 15rem;
        position: relative;

        border-radius: 0.75rem;

        padding: 0.5rem 1rem;
        border: 2px solid ${(props) => props.theme.theme.text};
        color: ${(props) => props.theme.theme.text};
        background: ${(props) => props.theme.theme.secondary};

        & + button {
          margin-left: 2rem;
          color: ${(props) => props.theme.theme.secondary};
          background: ${(props) => props.theme.theme.text};
        }
        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`;
export const ModalBg = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;

  transition: opacity 1s;

  display: flex;
  justify-content: center;
  align-items: center;
`;
