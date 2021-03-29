import React from "react";
import PropTypes from "prop-types";

import { capitalizeName } from "helpers";

import {
  Container,
  EmployiiProfileIcon,
  Name,
  Email,
  ActionButton,
  EditIcon,
  SaveIcon,
} from "./styles";

const DetailsCard = ({ id, first_name, last_name, email }) => (
  <Container>
    <EmployiiProfileIcon />
    <Name>{capitalizeName(first_name) + " " + capitalizeName(last_name)}</Name>
    <Email>{email}</Email>
    <ActionButton>
      <EditIcon />
    </ActionButton>
  </Container>
);

DetailsCard.defaultProps = {
  id: 1,
  first_name: "isaac",
  last_name: "seshoka",
  email: "ick.seshoka@gmail.com",
};

DetailsCard.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DetailsCard;
