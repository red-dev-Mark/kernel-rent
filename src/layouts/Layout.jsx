import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  background-color: #f6f7f9;
`;

const MainContent = styled.div`
  padding: 64px;

  flex: 1;
`;

export default Layout;
