import styled from 'styled-components';
import { COLORS } from '../constants/style';

const CarSpecItem = ({ icon, value, unit }) => {
  return (
    <SpecItem>
      <IconWrapper>{icon}</IconWrapper>
      <SpecText>{`${value} ${unit || ''}`}</SpecText>
    </SpecItem>
  );
};

const SpecItem = styled.div`
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

const SpecText = styled.p`
  font-size: 14px;
`;

export default CarSpecItem;
