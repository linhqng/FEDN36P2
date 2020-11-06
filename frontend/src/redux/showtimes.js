import { GET_SHOWTIMES } from "./types/showtime";

const initialState={
    showtimes:[],
    selectedShowtime: null
}

const getShowtimes = (state, payload) => ({
    ...state,
    showtimes: payload
  });

export default (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_SHOWTIMES:
        return getShowtimes(state, payload);
      default:
        return state;
    }
  };