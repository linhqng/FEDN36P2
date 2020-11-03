import { SELECT_MOVIE } from "./types/movies";

const initialState = {
  movies: [],
  selectedMovie: null,
};
const onSelectMovie = (state, payload) => ({
  ...state,
  selectedMovie: payload,
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_MOVIE: {
      return onSelectMovie(state, payload);
    }
    default:
      return state;
  }
};
