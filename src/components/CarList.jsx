import RentalCarCard from './RentalCarCard';
import styled from 'styled-components';
import { COLORS } from '../constants/style';

const CarList = ({ title, data, onViewAllClick }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {onViewAllClick && (
          <ViewAllButton onClick={onViewAllClick}>View All</ViewAllButton>
        )}
      </Header>

      <CarsList>
        {data.map((carInfo, index) => (
          <RentalCarCard
            key={index}
            cardInfo={carInfo}
            onClick={() => console.log('Rent Now')}
          />
        ))}
      </CarsList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  padding: 12px;

  font-weight: bold;
  color: ${COLORS.INFO};
`;

const ViewAllButton = styled.button`
  padding: 12px;

  font-weight: bold;
  color: ${COLORS.PRIMARY};

  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const CarsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export default CarList;
