import styled, { css } from 'styled-components';

export const IconButton = ({ icon, hasNotification = false }) => {
  return <IconWrapper hasNotification={hasNotification}>{icon}</IconWrapper>;
};

export const ProfileButton = ({ image, hasNotification = false }) => {
  return (
    <ImageWrapper hasNotification={hasNotification}>
      <img src={image} alt="프로필 사진" />
    </ImageWrapper>
  );
};

const BasicButtonStyles = css`
  width: 44px;
  height: 44px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid #c3d4e966;

  cursor: pointer;

  &::after {
    content: '';
    display: ${({ hasNotification }) => (hasNotification ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0;
    right: 0;

    background-color: #ff0000;
    border-radius: 50%;
  }
`;

const IconWrapper = styled.div`
  ${BasicButtonStyles}
`;

const ImageWrapper = styled.div`
  ${BasicButtonStyles}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 0;
  }
`;

export default ProfileButton;
