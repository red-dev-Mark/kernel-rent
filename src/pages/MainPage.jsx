import styled from 'styled-components';
import PopularCar from '../components/PopularCar';
import popularCarData from '../mock/popular-car.json';
import recommendationCarData from '../mock/recommendation-car.json';

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
    </>
  );
};

const CarListGroup = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

export default MainPage;
