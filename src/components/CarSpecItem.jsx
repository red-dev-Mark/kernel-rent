import styled from 'styled-components';

const CarSpecItem = ({ type, icon, value, text }) => {
  return (
    <SpecItem>
      <IconWrapper>{icon}</IconWrapper>
      <SpecText>{`${value} ${text}`}</SpecText>
    </SpecItem>
  );
};

const SpecItem = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  color: #90a3bf;
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
