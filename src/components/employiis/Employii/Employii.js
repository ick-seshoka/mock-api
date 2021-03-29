import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  ProfileImage,
  Name,
  Email,
  DeleteButton,
  TrashIcon,
} from "./styles";

const Employii = ({ first_name, last_name, email }) => (
  <Container>
    <ProfileImage />
    <Name>{first_name + " " + last_name}</Name>
    <Email>{email}</Email>
    <DeleteButton>
      <TrashIcon />
    </DeleteButton>
  </Container>
);

Employii.defaultProps = {
  first_name: "isaac",
  last_name: "seshoka",
  email: "ick.seshoka@gmail.com",
};

Employii.defaultProps = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Employii;
