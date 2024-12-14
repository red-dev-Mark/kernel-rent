import styled from 'styled-components';
import { Search, SlidersHorizontal, Heart, Bell, Settings } from 'lucide-react';
import { COLORS } from '../constants/style';
import { ProfileButton, IconButton } from './ProfileButton';

const Header = () => {
  return (
    <Container>
      <LeftSection>
        <Logo>KernelRent</Logo>
        <SearchBar>
          <Search />
          <SearchInput placeholder="Search something here" />
          <SlidersHorizontal />
        </SearchBar>
      </LeftSection>

      <RightSection>
        <IconButton
          icon={<Heart size={20} color={COLORS.DESCRIPTION} strokeWidth={3} />}
        />
        <IconButton
          icon={<Bell size={20} color={COLORS.DESCRIPTION} strokeWidth={3} />}
          hasNotification
        />
        <IconButton
          icon={
            <Settings size={20} color={COLORS.DESCRIPTION} strokeWidth={3} />
          }
        />
        <ProfileButton image="https://www.filmmakers.co.kr/files/attach/images/2021/05/25/59a2cc7dfc00d60f2697f8d739ccfea2.jpg" />
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;

  display: flex;
  justify-content: space-between;

  background-color: ${COLORS.WHITE};
`;

const LeftSection = styled.div`
  margin-left: 24px;

  display: flex;
  gap: 36px;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;

const SearchBar = styled.div`
  width: 450px;
  height: 44px;
  padding: 0 20px;

  display: flex;
  gap: 24px;
  align-items: center;

  border: 1px solid #c3d4e966;
  border-radius: 24px;
`;

const SearchInput = styled.input`
  flex: 1;

  font-size: 14px;
  color: #596780;
  border: 0;
`;

const RightSection = styled.div`
  display: flex;
  gap: 20px;
`;

export default Header;
