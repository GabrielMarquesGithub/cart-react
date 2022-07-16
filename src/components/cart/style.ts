import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  top: 5rem;

  background: ${(props) => props.theme.theme.secondary};
  width: 20rem;
  min-height: 10rem;
  padding: 1rem;

  border-radius: 1rem;
  box-shadow: 2px 2px 10px black;
`;
export const CartBg = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;
`;
