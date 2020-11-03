import { SELECT_MOVIE } from "../types/movies";

export const onSelectMovie = movie => ({
    type: SELECT_MOVIE,
    payload: movie
  });