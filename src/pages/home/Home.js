import React from "react";

import Header from "components/header";

import { Container, Main, EmployiisCount } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <Main>
      <EmployiisCount>{`4 employiis found`}</EmployiisCount>
    </Main>
  </Container>
);

export default Home;
