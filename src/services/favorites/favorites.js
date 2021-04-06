const FAV_KEY = 'favorites';

export const addToFavorites = (videoID) => {
  let newFavorites = [videoID];
  const favorites = localStorage.getItem(FAV_KEY);

  if (favorites) {
    const oldFavorites = JSON.parse(favorites);
    newFavorites = [...newFavorites, ...oldFavorites];
  }

  localStorage.setItem(FAV_KEY, JSON.stringify(newFavorites));
};

export const removeFromFavorites = (videoID) => {
  const favorites = localStorage.getItem(FAV_KEY);

  if (favorites) {
    const oldFavorites = JSON.parse(favorites);
    const idx = oldFavorites.indexOf(videoID);
    if (idx >= 0) {
      oldFavorites.splice(idx, 1);
      localStorage.setItem(FAV_KEY, JSON.stringify(oldFavorites));
    }
  }
};

export const getFavorites = () => {
  const favs = localStorage.getItem(FAV_KEY);

  return favs ? JSON.parse(favs) : [];
};

export const isFavorite = (videoID) => {
  const favorites = getFavorites();

  return favorites.some((f) => f === videoID);
};
