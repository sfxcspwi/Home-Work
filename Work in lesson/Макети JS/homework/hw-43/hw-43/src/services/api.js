const API_KEY = '56162446-a0801f2c9ff8edfd81e602267'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Помилка при завантаженні даних');
    }
    return response.json();
  });
};