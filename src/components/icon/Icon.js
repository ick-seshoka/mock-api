import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Icon = ({ src }) => <Container src={src} />;

Icon.defaultProps = {
  src: "",
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
