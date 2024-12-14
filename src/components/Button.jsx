import styled from 'styled-components';
import { COLORS } from '../constants/style';

const Button = ({ buttonText, bgColor, onClick }) => {
  return (
    <StyledButton onClick={onClick} bgColor={bgColor}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 120px;
  height: 44px;
  padding: 0 20px;

  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
  color: ${COLORS.WHITE};
  background-color: ${({ bgColor = COLORS.PRIMARY }) => bgColor};

  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
