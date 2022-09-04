import axios from "axios";

const { REACT_APP_IMDB_API_KEY } = process.env;

const instance = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

export const request = {
  getList: (pageNumber) =>
    instance.get(`?apikey=${REACT_APP_IMDB_API_KEY}&s=You&page=${pageNumber}`),
  getDetail: (movieId) =>
    instance.get(`?apikey=${REACT_APP_IMDB_API_KEY}&i=${movieId}`),
};
