import styled from "styled-components";
import { Link } from "react-router-dom";

import EmployiisIconSource from "assets/icons/employiis-icon.svg";
import IconSource from "components/icon";

export const Container = styled.div`
  display: flex;
  height: 6.25em;
  background-color: ${({ theme: { colors } }) => colors.gray};
`;

export const ContentWrap = styled.div`
  display: flex;
  width: 64em;
  align-items: center;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme: { font } }) => font.logo};
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};
`;

export const EmployiisIcon = styled(IconSource).attrs({
  src: EmployiisIconSource,
})``;

export const LogoName = styled.p`
  margin-left: 0.3em;
`;
