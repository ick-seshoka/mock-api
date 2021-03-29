import React from "react";

import Header from "components/header";
import DetailsCard from "components/detailsCard";
import Footer from "components/footer";

import { Container, Main, Title } from "./styles";

const Details = () => (
  <Container>
    <Header />
    <Main>
      <Title>employiis details</Title>
      <DetailsCard />
    </Main>
    <Footer />
  </Container>
);

export default Details;
