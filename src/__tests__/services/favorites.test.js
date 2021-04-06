import {
  addToFavorites,
  getFavorites,
  isFavorite,
  removeFromFavorites,
} from '../../services/favorites';

const localStorageMock = {
  store: {},
  getItem: (key) => {
    return this.store[key] || null;
  },
  setItem: (key, value) => {
    this.store[key] = String(value);
  },
  clear: (key) => {
    this.store[key] = null;
  },
};

describe('Favorites Service tests suit', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('#addToFavorites #getFavorites should add and retrieve favorite videos', () => {
    addToFavorites('a1b2c3');
    expect(getFavorites()).toEqual(['a1b2c3']);
    addToFavorites('9876');
    expect(getFavorites()).toEqual(['9876', 'a1b2c3']);
  });

  it('#removeFromFavorites should remove favorite videos', () => {
    addToFavorites('a1b2c3');
    expect(getFavorites()).toEqual(['a1b2c3']);
    removeFromFavorites('a1b2c3');
    expect(getFavorites()).toEqual([]);
  });

  it('#isFavorite should return true if the videoID belongs to favorite list', () => {
    addToFavorites('a1b2c3');
    addToFavorites('9876');

    expect(isFavorite('a1b2c3')).toEqual(true);
    expect(isFavorite('9876')).toEqual(true);
  });

  it('#isFavorite should return false if the videoID not belongs to favorite list', () => {
    addToFavorites('9876');

    expect(isFavorite('a1b2c3')).toEqual(false);
    expect(isFavorite('9876')).toEqual(true);
  });
});
