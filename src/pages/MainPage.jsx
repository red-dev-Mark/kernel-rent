import styled from 'styled-components';
import PopularCar from '../components/CarList';
import popularCarData from '../mock/popular-car.json';
import recommendationCarData from '../mock/recommendation-car.json';
import Button from '../components/Button';
import { COLORS } from '../constants/style';

const MainPage = () => {
  const totalCarCount = popularCarData.length + recommendationCarData.length;

  return (
    <>
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
