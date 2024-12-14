import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { COLORS } from '../constants/style';
import { Heart, Fuel, CircleDotDashed, UsersRound } from 'lucide-react';
import CarPrice from './CarPrice';
import CarSpecItem from './CarSpecItem';

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
    <Container>
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

      <ImageWrapper>
        <CarImage src={image} alt="렌터카 이미지" />
      </ImageWrapper>

      <SpecGroup>
        <CarSpecItem icon={<Fuel size={20} />} value={fuelCapacity} unit="L" />
        <CarSpecItem icon={<CircleDotDashed size={20} />} value={gearType} />
        <CarSpecItem
          icon={<UsersRound size={20} />}
          value={seats}
          unit="People"
        />
      </SpecGroup>

      <FooterWrapper>
        <CarPrice originalPrice={originalPrice} salePrice={salePrice} />
        <Button buttonText="Rent Now" onClick={() => console.log('Rent Now')} />
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;

  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;

  background-color: ${COLORS.WHITE};
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

const ImageWrapper = styled.div`
  height: 196px;

  display: flex;
  align-items: center;

  overflow: hidden;
`;

const CarImage = styled.img`
  width: 100%;
  transform: scaleX(-1);
`;

const SpecGroup = styled.div`
  width: 100%;
  padding: 0 2px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export default RentalCarCard;
