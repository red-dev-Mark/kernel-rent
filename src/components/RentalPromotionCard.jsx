import styled from 'styled-components';
import Button from './common/Button';
import { COLORS } from '../constants/style';

const RentalPromotionCard = ({
  theme = 'primary',
  titles,
  descriptions,
  image,
}) => {
  return (
    <Container theme={theme}>
      <TitleGroup>
        {titles.map((title, index) => (
          <Title key={index}>{title}</Title>
        ))}
      </TitleGroup>

      <DescriptionGroup>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </DescriptionGroup>

      <Button
        buttonText="Rental Car"
        bgColor={theme === 'primary' ? COLORS.PRIMARY : COLORS.SECONDARY}
        onClick={() => console.log('Rental Car')}
      />

      <CarImage src={image} alt="프로모션 렌터차 이미지" />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 308px;
  padding: 36px;
  position: relative;

  display: flex;
  gap: 24px;
  flex-direction: column;

  color: ${COLORS.WHITE};

  background-color: ${({ theme }) =>
    theme === 'primary' ? COLORS.SECONDARY : COLORS.PRIMARY};
  border-radius: 10px;
`;

const TitleGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const DescriptionGroup = styled.div`
  margin-bottom: 12px;

  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const CarImage = styled.img`
  width: 406px;
  position: absolute;
  bottom: -36px;
  right: 48px;

  transform: scaleX(-1);
`;

export default RentalPromotionCard;
