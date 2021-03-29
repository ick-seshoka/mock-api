import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import NoEmployiisIconSource from "assets/icons/no-employiis-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.25em 1fr 6.25em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40em;
  justify-content: center;
`;

export const NoEmployiisIcon = styled(ReactSVG).attrs({
  src: NoEmployiisIconSource,
})`
  margin-bottom: 2.625em;
`;

export const Title = styled.h2`
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};
  margin-bottom: 0.725em;
  font-weight: 700;
  font-size: ${({ theme: { font } }) => font.heading};
`;

export const GotoEmployiis = styled(Link)`
  color: ${({ theme: { colors } }) => colors.blue_gray_light};
  font-weight: 300;
  font-size: ${({ theme: { font } }) => font.tiny};
`;
