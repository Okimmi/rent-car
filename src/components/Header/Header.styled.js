import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(11, 68, 205, 0.5);
  color: ${({ theme: { colors } }) => colors.primeryWhite};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 320px) {
    margin: 0 auto;
    padding: 8px 16px;
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.07em;
`;
