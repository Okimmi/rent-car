import {
  AdditionalText,
  Img,
  MainText,
  TextAccent,
} from 'components/Global/Global.styled';
import {
  AdditionalTextBlock,
  Btn,
  Card,
  ImgContainer,
  LikeBtn,
} from './AdvertCard.styled';
import { ReactComponent as FavoritesIconNormal } from '../../icons/normal.svg';
import { useState } from 'react';
import { AdvertModal } from 'components/AdvertModal/AdvertModal';

export const AdvertCard = ({ item }) => {
  const {
    id,
    make,
    year,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
  } = item;
  const parseAdress = address.split(',');
  const city = parseAdress[1];
  const country = parseAdress[2];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <LikeBtn>
        <FavoritesIconNormal />
      </LikeBtn>
      <ImgContainer>
        <Img src={img} alt="" />
      </ImgContainer>
      <MainText>
        <h2>
          {make}
          <TextAccent> {model}</TextAccent>, {year}
        </h2>
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
        <AdditionalText>{id}</AdditionalText>
        <AdditionalText>{functionalities[0]}</AdditionalText>
      </AdditionalTextBlock>
      <Btn onClick={openModal}>Learn more</Btn>
      {isModalOpen && (
        <AdvertModal
          close={closeModal}
          data={{ item, city, country }}
        ></AdvertModal>
      )}
    </Card>
  );
};
