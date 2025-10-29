const API_BASE_URL = 'http://localhost:8000/api';

export const fetchHeroes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/heroes/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    return [];
  }
};

export const HEROES = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    image: `http://localhost:8000/api/heroes/${i + 1}/image/`  // DRF 이미지 URL
}));