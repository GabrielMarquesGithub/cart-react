import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
export const InternalContainer = styled.div`
  background: ${(props) => props.theme.theme.secondary};
  border-radius: 2rem;
  padding: 2rem;

  box-shadow: 2px 2px 10px black;

  width: 90vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CheckoutHeader = styled.header`
  margin-bottom: 2rem;
  border-radius: 2rem;
  padding: 0 2rem;
  height: 8rem;

  width: 100%;

  box-shadow: 2px 2px 10px black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    transition: filter 0.2s;
    &:hover {
      filter: brightness(2);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      border: 5px solid ${(props) => props.theme.theme.text};
      border-radius: 100%;

      font-size: 1.4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 1.5rem;

      & + span {
        margin-left: 2rem;
      }
      &.active {
        border-color: ${(props) => props.theme.theme.green};
        color: ${(props) => props.theme.theme.green};
      }
    }
  }
`;
export const CheckoutItems = styled.section`
  background: ${(props) => props.theme.theme.white};
  border-radius: 1rem;

  padding: 2rem;
  overflow: auto;
  max-height: 16rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  svg {
    cursor: pointer;
  }

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
export const CheckoutFooter = styled.footer`
  padding: 1rem;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .total {
    font-size: 1.3rem;
  }
  .buttonsContainer {
    button {
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
      .errorMessage {
        filter: none;
        cursor: default;

        position: absolute;
        width: 100%;
        left: 0;
        bottom: calc(100% + 1rem);

        color: ${(props) => props.theme.theme.secondary};
        background: ${(props) => props.theme.theme.text};

        border-radius: 0.75rem;
        padding: 0.5rem;
      }
    }
  }
`;
