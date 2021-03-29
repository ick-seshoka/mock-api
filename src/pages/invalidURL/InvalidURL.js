import React from "react";

import { routes } from "enums";

import Header from "components/header";
import Footer from "components/footer";

import {
  Container,
  Main,
  NoEmployiisIcon,
  Title,
  GotoEmployiis,
} from "./styles";

const InvalidURL = () => (
  <Container>
    <Header />
    <Main>
      <NoEmployiisIcon />
      <Title>No employiis on this page</Title>
      <GotoEmployiis to={routes.home}>
        Click here to view employees
      </GotoEmployiis>
    </Main>
    <Footer />
  </Container>
);

export default InvalidURL;
