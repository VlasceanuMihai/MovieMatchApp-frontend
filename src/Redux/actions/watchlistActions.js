export const WATCHLIST = "SET_WATCHLIST";

export function setWatchlist (movie) {
  return {
    type: WATCHLIST,
    id: movie.id,
    name: movie.name,
    description: movie.description,
    year: movie.year,
    popularity: movie.popularity,
    rating: movie.rating,
    imageUrl: movie.imageUrl,
  };
};

// export default setWatchlist;
