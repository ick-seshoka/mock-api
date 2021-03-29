import styled from "styled-components";
import { ReactSVG } from "react-svg";

import EmployissIconSource from "assets/icons/employiis-icon-footer.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;

export const LogoIcon = styled(ReactSVG).attrs({ src: EmployissIconSource })`
  margin-right: 0.8em;
`;

export const Logo = styled.div`
  font-size: ${({ theme: { font } }) => font.tiny};
  color: ${({ theme: { colors } }) => colors.blue_gray_light};
  font-weight: 900;
  text-transform: capitalize;
  flex-direction: row;
  align-items: center;
  display: flex;
`;
