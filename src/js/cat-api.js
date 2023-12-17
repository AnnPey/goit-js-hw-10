import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_VWjU5t7VlUhO2ZrHmCZxWolJCkyoBvZF6zZyMkpMvxgJqGhRZqXAWAzHhEu3y3vK';
const catApiUrl = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  const url = `${catApiUrl}/breeds`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `${catApiUrl}/images/search?breed_ids=${breedId}`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}