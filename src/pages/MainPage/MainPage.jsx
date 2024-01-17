import {
  ButtonLink,
  Text,
  TextContainer,
  Title,
  Wrapper,
} from "./MainPage.styled";

export const MainPage = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Car rental company</Title>
        <Text>Your Gateway to Smooth Journeys</Text>
      </TextContainer>
      <ButtonLink href="/catalog">Check price and book online</ButtonLink>
    </Wrapper>
  );
};
