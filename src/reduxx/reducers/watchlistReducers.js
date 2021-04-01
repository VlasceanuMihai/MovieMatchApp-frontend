import { WATCHLIST } from "../../reduxx/actions/watchlistActions";

const initialState = {
  watchlist: [],
};

const watchlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case WATCHLIST:
      return {
        watchlist: [
          // ...state.watchlist,
          {
            id: action.id,
            name: action.name,
            description: action.description,
            year: action.year,
            popularity: action.popularity,
            rating: action.rating,
            imageUrl: action.imageUrl,
          },
        ],
      };

    default:
      return state;
  }
};

export default watchlistReducers;
