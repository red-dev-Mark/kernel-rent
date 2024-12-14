import styled from 'styled-components';
import { COLORS } from '../../constants/style';

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <BrandSection>
          <BrandTitle>KernelRent</BrandTitle>
          <BrandDescription>
            <p>Our vision is to provide convenience</p>
            <p>and help increase your sales business.</p>
          </BrandDescription>
        </BrandSection>

        <LinksWrapper>
          <LinkSection>
            <SectionTitle>About</SectionTitle>
            <SectionLink>How it works</SectionLink>
            <SectionLink>Featured</SectionLink>
            <SectionLink>Partnership</SectionLink>
            <SectionLink>Business Relation</SectionLink>
          </LinkSection>

          <LinkSection>
            <SectionTitle>Community</SectionTitle>
            <SectionLink>Events</SectionLink>
            <SectionLink>Blog</SectionLink>
            <SectionLink>Podcast</SectionLink>
            <SectionLink>Invite a friend</SectionLink>
          </LinkSection>

          <LinkSection>
            <SectionTitle>Socials</SectionTitle>
            <SectionLink>Discord</SectionLink>
            <SectionLink>Instagram</SectionLink>
            <SectionLink>Twitter</SectionLink>
            <SectionLink>Facebook</SectionLink>
          </LinkSection>
        </LinksWrapper>
      </FooterContent>

      <BottomBar>
        <CopyrightSection>
          <p>©2024 KernelRent. All rights reserved</p>
        </CopyrightSection>
        <PolicyLinks>
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </PolicyLinks>
      </BottomBar>
    </Container>
  );
};

const Container = styled.footer`
  width: calc(100% - 120px);
  padding: 60px;

  display: flex;
  flex-direction: column;

  background-color: ${COLORS.WHITE};
`;

const FooterContent = styled.div`
  margin-top: 20px;
  padding-bottom: 44px;

  display: flex;

  border-bottom: 1px solid ${COLORS.BORDER};
`;

const BrandSection = styled.div`
  width: 50%;

  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const BrandTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${COLORS.PRIMARY};
`;

const BrandDescription = styled.div`
  color: ${COLORS.DESCRIPTION};
`;

const LinksWrapper = styled.div`
  width: 50%;
  margin-right: 44px;

  display: flex;
  gap: 84px;
  justify-content: flex-end;
`;

const LinkSection = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const SectionTitle = styled.h1`
  margin-bottom: 8px;

  font-weight: 600;
  color: ${COLORS.BLACK};
`;

const SectionLink = styled.p`
  font-size: 14px;
  color: ${COLORS.DESCRIPTION};

  cursor: pointer;
`;

const BottomBar = styled.div`
  margin-top: 36px;

  display: flex;
  justify-content: space-between;
`;

const CopyrightSection = styled.div`
  font-size: 14px;
`;

const PolicyLinks = styled.div`
  display: flex;
  gap: 84px;

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.BLACK};

  cursor: pointer;
`;

export default Footer;
