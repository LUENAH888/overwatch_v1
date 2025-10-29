import styled from 'styled-components';

const LogoWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img 
        src="/logo_overwatch.png"
        alt="Overwatch" 
      />
    </LogoWrapper>
  );
};

export default Logo;