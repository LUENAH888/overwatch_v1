export const HEROES = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    image: `https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero${i + 1}.png`
  }));