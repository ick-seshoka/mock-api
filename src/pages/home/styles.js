import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.25em 1fr 6.25em;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: 6em 1fr;
  justify-items: center;
  padding-bottom: 4em;
`;

export const EmployiisCount = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${({ theme: { font } }) => font.tiny};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.blue_gray_light};
  width: 64em;
  margin: 0 auto;
`;
