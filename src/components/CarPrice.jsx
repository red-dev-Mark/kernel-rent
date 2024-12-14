import styled from 'styled-components';
import { COLORS } from '../constants/style';

const CarPrice = ({ originalPrice, salePrice, direction }) => {
  return (
    <PriceGroup direction={direction}>
      <OriginalPrice>
        ${originalPrice}.00
        <Divider>/</Divider>
        <DayText>day</DayText>
      </OriginalPrice>
      {salePrice && <SalePrice>${salePrice}.00</SalePrice>}
    </PriceGroup>
  );
};

const PriceGroup = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: ${({ direction }) =>
    direction === 'row' ? 'center' : 'flex-start'};
  flex-direction: ${({ direction = 'column' }) => direction};

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.INFO};
`;

const OriginalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.BLACK};
`;

const Divider = styled.span`
  margin: 0 2px;
`;

const DayText = styled.span`
  font-size: 14px;
  color: ${COLORS.INFO};
`;

const SalePrice = styled.p`
  text-decoration: line-through;
`;

export default CarPrice;
