import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 8px 16px;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Page = styled.div`
  margin-top: 76px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const TextAccent = styled.span`
  color: ${({ theme: { colors } }) => colors.lightBlue};
`;
