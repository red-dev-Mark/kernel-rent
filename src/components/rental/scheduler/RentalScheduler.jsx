import styled from 'styled-components';
import { COLORS } from '../../../constants/style';
import SelectionItem from './SelectionItem';

// mode: 'pick-up' | 'drop-off'
const RentalScheduler = ({ mode }) => {
  return (
    <Container>
      <Header>
        <OutsideCircle mode={mode}>
          <InsideCircle mode={mode} />
        </OutsideCircle>
        <Title>{mode === 'pick-up' ? 'Pick-Up' : 'Drop-Off'}</Title>
      </Header>

      <SelectionContainer>
        <SelectionItem label="Locations" placeholder="city" />
        <Divider />
        <SelectionItem label="Date" placeholder="date" />
        <Divider />
        <SelectionItem label="Time" placeholder="time" />
      </SelectionContainer>
    </Container>
  );
};

const Container = styled.div`
  /* width: 486px; */
  width: 100%;
  padding: 24px 48px;

  display: flex;
  gap: 16px;
  flex-direction: column;

  background-color: ${COLORS.WHITE};
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
`;

const OutsideCircle = styled.div`
  width: 16px;
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ mode }) =>
    mode === 'pick-up' ? `${COLORS.PRIMARY}80` : `${COLORS.SECONDARY}80`};
  border-radius: 50%;
`;

const InsideCircle = styled.div`
  width: 8px;
  height: 8px;

  background-color: ${({ mode }) =>
    mode === 'pick-up' ? COLORS.PRIMARY : COLORS.SECONDARY};
  border-radius: 50%;
`;

const Title = styled.p`
  font-weight: bold;
  color: ${COLORS.BLACK};
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 48px;
  margin: 0 24px;

  background-color: ${COLORS.BORDER};
`;

export default RentalScheduler;
