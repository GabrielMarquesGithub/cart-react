import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  top: 5rem;

  color: ${(props) => props.theme.theme.dark};
  background: ${(props) => props.theme.theme.white};
  width: 20rem;
  min-height: 10rem;

  border-radius: 1rem;
  box-shadow: 2px 2px 10px black;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .cartTitle {
    cursor: default;
    padding: 1rem;
    background: ${(props) => props.theme.theme.dark};
    color: ${(props) => props.theme.theme.white};

    border-start-end-radius: 0.8rem;
    border-start-start-radius: 0.8rem;
  }
  a {
    text-align: center;

    padding: 1rem;
    font-size: 0.9rem;
    background: ${(props) => props.theme.theme.dark};
    color: ${(props) => props.theme.theme.white};

    border-end-end-radius: 0.8rem;
    border-end-start-radius: 0.8rem;

    border: none;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
export const ItemContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-height: 25rem;
  overflow: auto;
  &::-webkit-scrollbar {
    border-radius: 1rem;
    width: 0.4rem;
    background: ${(props) => props.theme.theme.white};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${(props) => props.theme.theme.light};
  }

  .defaultMessage {
    cursor: default;

    text-align: center;
    color: ${(props) => props.theme.theme.grey};
    margin-top: auto;
  }
`;
export const CartBg = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;

  transition: opacity 1s;
`;
