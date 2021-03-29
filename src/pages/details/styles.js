import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.25em 1fr 6.25em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40em;
`;

export const Title = styled.div`
  font-size: ${({ theme: { font } }) => font.heading};
  color: ${({ theme: { colors } }) => colors.blue_gray_light};
  font-weight: 900;
  margin-bottom: 3.125em;
  text-transform: capitalize;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const EmployiiDetails = styled.div``;
