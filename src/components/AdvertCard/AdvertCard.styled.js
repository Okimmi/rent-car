import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 274px;
`;

export const ImgContainer = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MainText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AdditionalTextBlock = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const AdditionalText = styled.span`
  &:not(:last-child)::after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Btn = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  background: ${({ theme: { colors } }) => colors.lightBlue};
  color: ${({ theme: { colors } }) => colors.primeryWhite};
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;

  transition: background-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  transition: transform var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
