import React from "react";
import PropTypes from "prop-types";

import Employii from "./employii";
import { capitalizeName } from "helpers";

import { Container } from "./styles";

const Employiis = ({ employiis }) => {
  const employiis_list = employiis.map(
    ({ id, first_name, last_name, email }) => (
      <Employii
        key={id}
        first_name={capitalizeName(first_name)}
        last_name={capitalizeName(last_name)}
        email={email}
      />
    )
  );

  return <Container>{employiis_list}</Container>;
};

Employiis.defaultProps = {
  employiis: [
    {
      id: 1,
      first_name: "isaac",
      last_name: "seshoka",
      email: "ick.seshoka@creatr.com",
    },
    {
      id: 2,
      first_name: "kagiso",
      last_name: "mogane",
      email: "kg.mogane@gmail.com",
    },
    {
      id: 3,
      first_name: "tshilisanani",
      last_name: "ndou",
      email: "tshil.ndou@yahoo.com",
    },
    {
      id: 4,
      first_name: "kutlwano",
      last_name: "metseng",
      email: "k.meteseng@gmail.com",
    },
    {
      id: 5,
      first_name: "mpho",
      last_name: "talane",
      email: "mphoza.t@yahoo.com",
    },
  ],
};

Employiis.propTypes = {
  employiis: PropTypes.array.isRequired,
};

export default Employiis;
