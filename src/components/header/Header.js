import React from "react";

import { routes } from "enums";

import {
  Container,
  ContentWrap,
  LogoLink,
  EmployiisIcon,
  LogoName,
} from "./styles";

const Header = () => (
  <Container>
    <ContentWrap>
      <LogoLink to={routes.home}>
        <EmployiisIcon />
        <LogoName>employiis</LogoName>
      </LogoLink>
    </ContentWrap>
  </Container>
);

export default Header;
