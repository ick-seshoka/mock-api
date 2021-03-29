import { ReactSVG } from "react-svg";
import styled from "styled-components";

import EmployiiIconSource from "assets/icons/employii-icon.svg";
import EditIconSource from "assets/icons/pancil-icon.svg";
import SaveIconSource from "assets/icons/floppy-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38em;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.gray};
  padding: 3.375em;
`;

export const EmployiiProfileIcon = styled(ReactSVG).attrs({
  src: EmployiiIconSource,
})`
  margin-bottom: 2.1875em;
`;

export const Name = styled.p`
  font-size: ${({ theme: { font } }) => font.paragraph};
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};

  margin-bottom: 0.635em;
`;

export const Email = styled.p`
  font-size: ${({ theme: { font } }) => font.paragraph};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};
  margin-bottom: 1.8375em;
`;

export const ActionButton = styled.button`
  background: transparent;
  color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const EditIcon = styled(ReactSVG).attrs({ src: EditIconSource })``;

export const SaveIcon = styled(ReactSVG).attrs({ src: SaveIconSource })``;
