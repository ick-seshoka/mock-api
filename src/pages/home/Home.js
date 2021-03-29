import React from "react";

import Header from "components/header";
import Footer from "components/footer";

import { Container, Main, EmployiisCount } from "./styles";
import Employiis from "components/employiis";

const Home = () => (
  <Container>
    <Header />
    <Main>
      <EmployiisCount>{`4 employiis found`}</EmployiisCount>
      <Employiis />
    </Main>
    <Footer />
  </Container>
);

export default Home;
