import styled from 'styled-components';
import { COLORS } from '../../../constants/style';

const SelectionItem = ({ label, placeholder }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Dropdown>
        <option value="">Select your {placeholder}</option>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  width: 126px;

  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Label = styled.p`
  font-weight: bold;
  color: ${COLORS.BLACK};
`;

const Dropdown = styled.select`
  font-size: 12px;
  color: ${COLORS.INFO};

  border: 0;
  cursor: pointer;
`;

export default SelectionItem;
