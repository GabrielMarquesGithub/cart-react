import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;

  background: ${(props) => props.theme.theme.secondary};

  transition: background-color 0.3s;
`;
export const InternalContainer = styled.header`
  padding: 0 2rem;
  max-width: 1080px;
  margin: 0 auto;

  height: 5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: 2rem;

  svg {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
