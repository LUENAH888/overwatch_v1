import styled from 'styled-components';
import Hero from './Hero';
import { HEROES } from '../data/heroes';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 660px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroGrid = () => {
  return (
    <GridContainer>
      {HEROES.map((hero) => (
        <Hero key={hero.id} imageUrl={hero.image} />
      ))}
    </GridContainer>
  );
};

export default HeroGrid;