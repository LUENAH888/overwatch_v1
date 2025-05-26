import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchHeroes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/heroes/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    return [];
  }
};

export const HEROES = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    image: `http://localhost:8000/api/heroes/${i + 1}/image/`  // DRF 이미지 URL
}));