import styled from 'styled-components';
import { COLORS } from '../../constants/style';

const CarSpecItem = ({ icon, value, unit }) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      {`${value} ${unit || ''}`}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  color: ${COLORS.INFO};
`;
const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
`;

export default CarSpecItem;
