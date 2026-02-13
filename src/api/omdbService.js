import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Search movies
export const searchMovies = async (query, page = 1, type = "") => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page,
      type: type || undefined,
    },
  });

  if (res.data.Response === "False") {
    throw new Error(res.data.Error);
  }

  return res.data;
};

// Get movie details
export const getMovieDetails = async (id) => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });

  if (res.data.Response === "False") {
    throw new Error(res.data.Error);
  }

  return res.data;
};
