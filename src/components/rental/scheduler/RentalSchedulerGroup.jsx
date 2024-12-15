import styled from 'styled-components';
import RentalScheduler from './RentalScheduler';
import { ArrowUpDown } from 'lucide-react';
import { COLORS } from '../../../constants/style';

const RentalSchedulerGroup = () => {
  return (
    <Container>
      <RentalScheduler mode="pick-up" />
      <SwitchButton>
        <ArrowUpDown color="#ffffff" strokeWidth={1.5} />
      </SwitchButton>
      <RentalScheduler mode="drop-off" />
    </Container>
  );
};

const Container = styled.div`
  margin: 44px 0;

  display: flex;
  gap: 44px;
  justify-content: space-between;
  align-items: center;
`;

const SwitchButton = styled.button`
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.PRIMARY};
  border-radius: 10px;
  border: 0;
  cursor: pointer;
`;

export default RentalSchedulerGroup;
