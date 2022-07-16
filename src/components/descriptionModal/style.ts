import styled from "styled-components";

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

  .title {
    width: 60%;
    //para esconder overflow de text
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //para evitar quebra no layout por utilizar nowrap
  min-width: 0;

  cursor: pointer;

  padding: 2rem;
  background: ${(props) => props.theme.theme.white};
  border-radius: 1rem;

  transition: box-shadow 0.2s;
  &:hover {
    position: relative;
    box-shadow: 2px 2px 20px ${(props) => props.theme.theme.dark};
    ${DetailsContainer} {
      filter: brightness(1.4);
      .title {
        white-space: normal;
        overflow: visible;
        text-overflow: ellipsis;
      }
    }
  }
`;
