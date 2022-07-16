import styled from "styled-components";
import { BsFillLightbulbFill } from "react-icons/bs";

export const Container = styled.header`
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
`;
export const Light = styled(BsFillLightbulbFill)``;
