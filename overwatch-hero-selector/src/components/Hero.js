import styled from 'styled-components';

const HeroWrapper = styled.div`
  width: 80px;
  height: 84px;
  margin: 4px;
  border: 3px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #555;
  transform: skewX(-14deg);
  transition: transform .1s, background-color .6s;

  &:hover {
    background-color: #ff9c00;
    transform: skewX(-14deg) scale(1.3);
    z-index: 1;
  }
`;

const HeroImage = styled.div`
  width: 140%;
  height: 100%;
  transform: translateX(-16px) skewX(14deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90px;
  background-image: url(${props => props.imageUrl});
`;

const Hero = ({ imageUrl }) => {
  return (
    <HeroWrapper>
      <HeroImage imageUrl={imageUrl} />
    </HeroWrapper>
  );
};

export default Hero;