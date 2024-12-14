import styled from 'styled-components';
import PopularCar from '../components/CarList';
import popularCarData from '../mock/popular-car.json';
import promotionCarImage1 from '../assets/images/promotion-car-1.png';
import promotionCarImage2 from '../assets/images/promotion-car-2.png';
import recommendationCarData from '../mock/recommendation-car.json';
import Button from '../components/common/Button';
import { COLORS } from '../constants/style';
import RentalPromotionCard from '../components/RentalPromotionCard';

const MainPage = () => {
  const totalCarCount = popularCarData.length + recommendationCarData.length;

  return (
    <>
      <PromotionGroup>
        <RentalPromotionCard
          titles={['The Best Platform', 'for Car Rental']}
          descriptions={[
            'Ease of doing a car rental safely and',
            'reliably. Of course at a low price.',
          ]}
          image={promotionCarImage1}
        />
        <RentalPromotionCard
          theme="secondary"
          titles={['Easy way to rent a', 'car at a low price']}
          descriptions={[
            'Providing cheap car rental services',
            'and safe and comfortable facilities.',
          ]}
          image={promotionCarImage2}
        />
      </PromotionGroup>

      <CarListGroup>
        <PopularCar
          title="Popular Car"
          data={popularCarData}
          onViewAllClick={() => console.log('View All')}
        />
        <PopularCar title="Recommendation Car" data={recommendationCarData} />
      </CarListGroup>

      <SectionFooter>
        <ButtonWrapper>
          <Button
            buttonText="Show more car"
            onClick={() => console.log('Show more car')}
          />
        </ButtonWrapper>
        <CarCount>{totalCarCount} Car</CarCount>
      </SectionFooter>
    </>
  );
};

const PromotionGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const CarListGroup = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

const SectionFooter = styled.div`
  margin-top: 60px;

  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CarCount = styled.p`
  font-size: 14px;
  color: ${COLORS.INFO};
`;

export default MainPage;
