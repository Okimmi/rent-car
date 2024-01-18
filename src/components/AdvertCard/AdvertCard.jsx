import { TextAccent } from 'components/Global/Global.styled';
import {
  AdditionalText,
  AdditionalTextBlock,
  Btn,
  Card,
  Img,
  ImgContainer,
  LikeBtn,
  MainText,
} from './AdvertCard.styled';
import { ReactComponent as FavoritesIconNormal } from '../../icons/normal.svg';

export const AdvertCard = ({
  item: {
    make,
    year,
    model,
    type,
    img,
    rentalPrice,
    mileage,
    address,
    rentalCompany,
    functionalities,
  },
}) => {
  const parseAdress = address.split(',');
  const city = parseAdress[1];
  const country = parseAdress[2];

  return (
    <Card>
      <LikeBtn>
        <FavoritesIconNormal />
      </LikeBtn>
      <ImgContainer>
        <Img src={img} alt="" />
      </ImgContainer>
      <MainText>
        <p>
          {make}
          <TextAccent> {model}</TextAccent>, {year}
        </p>
        <p>{rentalPrice}</p>
      </MainText>
      <AdditionalTextBlock>
        <AdditionalText>{city}</AdditionalText>
        <AdditionalText>{country}</AdditionalText>
        <AdditionalText>{rentalCompany}</AdditionalText>
        <AdditionalText>Premium</AdditionalText>
      </AdditionalTextBlock>
      <AdditionalTextBlock>
        <AdditionalText>{type}</AdditionalText>
        <AdditionalText>{model}</AdditionalText>
        <AdditionalText>{mileage}</AdditionalText>
        <AdditionalText>{functionalities[0]}</AdditionalText>
      </AdditionalTextBlock>
      <Btn>Learn more</Btn>
    </Card>
  );
};
