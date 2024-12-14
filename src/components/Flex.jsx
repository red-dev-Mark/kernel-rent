import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  align-items: ${({ $align = 'stretch' }) => $align};
  gap: ${({ $gap = '0' }) => $gap};
  flex-direction: ${({ $direction = 'row' }) => $direction};
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;
