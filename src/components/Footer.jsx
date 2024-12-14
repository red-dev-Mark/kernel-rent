import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  outline: 1px solid red;

  width: 100%;
  height: 480px;
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  div {
    outline: 2px solid blue;
  }
`;

export default Footer;
