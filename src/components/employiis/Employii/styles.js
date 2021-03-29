import styled from "styled-components";
import { ReactSVG } from "react-svg";

import ProfileImageSource from "assets/icons/profile-image.svg";
import TrashIconSource from "assets/icons/trash-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0);
  transition: 0.25s ease-in all;
  padding-bottom: 0.9375em;
  transform: scale(1);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray_box};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    transform: scale(1.07);
  }
`;

export const ProfileImage = styled(ReactSVG).attrs({
  src: ProfileImageSource,
})`
  margin-bottom: 1.25em;
`;

export const Name = styled.p`
  font-size: ${({ theme: { font } }) => font.paragraph};
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};
  margin-bottom: 0.3125em;
`;

export const Email = styled.p`
  font-size: ${({ theme: { font } }) => font.paragraph};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.blue_gray_dark};
  margin-bottom: 0.9375em;
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const TrashIcon = styled(ReactSVG).attrs({ src: TrashIconSource })``;
