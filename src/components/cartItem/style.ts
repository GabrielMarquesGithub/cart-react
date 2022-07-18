import styled from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  img {
    max-width: 100%;
    max-height: 5rem;
  }
  .name {
    font-size: 0.8rem;

    cursor: default;
    padding: 1rem;
    width: 10rem;
    box-shadow: 2px 2px 10px black;

    position: absolute;
    z-index: 10;
    bottom: 0;
    left: calc(100% + 1rem);

    background: ${(props) => props.theme.theme.dark};
    color: ${(props) => props.theme.theme.white};
    display: none;

    border-radius: 1rem;

    &::after {
      content: "";

      position: absolute;
      left: -0.5rem;

      width: 0;
      height: 0;
      border-top: 0.5rem solid transparent;
      border-bottom: 0.5rem solid transparent;
      border-right: 0.5rem solid ${(props) => props.theme.theme.dark};
    }
  }
  &:hover {
    .name {
      display: inline-block;
    }
  }
`;
export const DetailsContainer = styled.div`
  cursor: default;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  grid-template-columns: 1fr 2fr 0.5fr;

  border-bottom: 1px solid ${(props) => props.theme.theme.text};
  padding: 1rem;
  &:last-child {
    border: none;
  }
`;
