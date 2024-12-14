import styled from 'styled-components';
import PopularCar from '../components/CarList';
import popularCarData from '../mock/popular-car.json';
import recommendationCarData from '../mock/recommendation-car.json';
import Button from '../components/Button';

const MainPage = () => {
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

      <ButtonWrapper>
        <Button
          buttonText="Show more car"
          onClick={() => console.log('Show more car')}
        />
      </ButtonWrapper>
    </>
  );
};

const CarListGroup = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
