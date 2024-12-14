import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { COLORS } from '../constants/style';
import { Heart } from 'lucide-react';

const RentalCarCard = ({ cardInfo }) => {
  const {
    name,
    type,
    isLiked,
    image,
    fuelCapacity,
    seats,
    gearType,
    originalPrice,
    salePrice,
  } = cardInfo;

  return (
    <CarInfoContainer>
      <HeaderWrapper>
        <TitleGroup>
          <CarName>{name}</CarName>
          <CarType>{type}</CarType>
        </TitleGroup>

        <LikeButton>
          {isLiked ? (
            <Heart color="#ff0000" fill="#ff0000" />
          ) : (
            <Heart color={COLORS.INFO} strokeWidth={1.5} />
          )}
        </LikeButton>
      </HeaderWrapper>

      <CarImage src={image} alt="렌터카 이미지" />

      <SpecsWrapper>
        <p>{fuelCapacity}</p>
        <p>{gearType}</p>
        <p>{seats}</p>
      </SpecsWrapper>

      <FooterWrapper>
        <PriceGroup>
          <OriginalPrice>
            ${originalPrice}.00/<span> day</span>
          </OriginalPrice>
          {salePrice && <SalePrice>${salePrice}.00</SalePrice>}
        </PriceGroup>
        <Button buttonText="Rent Now" onClick={() => console.log('Rent Now')} />
      </FooterWrapper>
    </CarInfoContainer>
  );
};

const CarInfoContainer = styled.div`
  width: 256px;
  padding: 24px;

  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
`;

const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const TitleGroup = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const CarName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.BLACK};
`;

const CarType = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.INFO};
`;

const LikeButton = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CarImage = styled.img`
  width: 100%;
  transform: scaleX(-1);
`;

const SpecsWrapper = styled.div`
  width: 100%;

  display: flex;
`;

const FooterWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const PriceGroup = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const OriginalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.BLACK};

  span {
    font-size: 14px;
    color: ${COLORS.INFO};
  }
`;

const SalePrice = styled.p`
  font-size: 14px;
  color: ${COLORS.INFO};
`;

export default RentalCarCard;
