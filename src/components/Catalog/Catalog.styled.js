import { styled } from 'styled-components';

export const Btn = styled.button`
  display: block;
  margin: 100px auto 0;
  border: none;
  background: none;
  color: ${({ theme: { colors } }) => colors.lightBlue};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer;
  transition: transform var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;
