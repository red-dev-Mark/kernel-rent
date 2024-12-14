import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100dvh;
`;

export default Layout;
