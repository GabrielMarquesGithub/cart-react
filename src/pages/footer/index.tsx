import { Outlet } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import { Container, InternalContainer } from "./style";

function Footer() {
  return (
    <>
      <Outlet />
      <Container>
        <InternalContainer>
          <a
            href="https://www.linkedin.com/in/gabriel-marques-magalhaes/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/NikisGabriel" target="_blank">
            <BsGithub />
          </a>
        </InternalContainer>
      </Container>
    </>
  );
}
export default Footer;
