import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarouselState {
  // Main banner carousel state
  mainBannerCurrentSlide: number;
  // Other carousels can be added here as needed
  newLaunchesCurrentSlide: number;
  liveCasinoCurrentSlide: number;
  slotsCurrentSlide: number;
  hashCurrentSlide: number;
  sportCurrentSlide: number;
  futuresCurrentSlide: number;
  cryptograCurrentSlide: number;
  tableGamesCurrentSlide: number;
  latestEarningsCurrentSlide: number;
  gameManufacturersCurrentSlide: number;
}

const initialState: CarouselState = {
  mainBannerCurrentSlide: 0,
  newLaunchesCurrentSlide: 0,
  liveCasinoCurrentSlide: 0,
  slotsCurrentSlide: 0,
  hashCurrentSlide: 0,
  sportCurrentSlide: 0,
  futuresCurrentSlide: 0,
  cryptograCurrentSlide: 0,
  tableGamesCurrentSlide: 0,
  latestEarningsCurrentSlide: 0,
  gameManufacturersCurrentSlide: 0,
};

// Load state from localStorage on initialization
const loadCarouselState = (): CarouselState => {
  if (typeof window === 'undefined') return initialState;
  
  try {
    const savedState = localStorage.getItem('carouselState');
    if (savedState) {
      const parsed = JSON.parse(savedState);
      return { ...initialState, ...parsed };
    }
  } catch (error) {
    console.warn('Failed to load carousel state from localStorage:', error);
  }
  
  return initialState;
};

// Save state to localStorage
const saveCarouselState = (state: CarouselState) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('carouselState', JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to save carousel state to localStorage:', error);
  }
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: loadCarouselState(),
  reducers: {
    setMainBannerSlide: (state, action: PayloadAction<number>) => {
      state.mainBannerCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setNewLaunchesSlide: (state, action: PayloadAction<number>) => {
      state.newLaunchesCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setLiveCasinoSlide: (state, action: PayloadAction<number>) => {
      state.liveCasinoCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setSlotsSlide: (state, action: PayloadAction<number>) => {
      state.slotsCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setHashSlide: (state, action: PayloadAction<number>) => {
      state.hashCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setSportSlide: (state, action: PayloadAction<number>) => {
      state.sportCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setFuturesSlide: (state, action: PayloadAction<number>) => {
      state.futuresCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setCryptograSlide: (state, action: PayloadAction<number>) => {
      state.cryptograCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setTableGamesSlide: (state, action: PayloadAction<number>) => {
      state.tableGamesCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setLatestEarningsSlide: (state, action: PayloadAction<number>) => {
      state.latestEarningsCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    setGameManufacturersSlide: (state, action: PayloadAction<number>) => {
      state.gameManufacturersCurrentSlide = action.payload;
      saveCarouselState(state);
    },
    // Reset all carousel states
    resetAllCarousels: (state) => {
      Object.assign(state, initialState);
      saveCarouselState(state);
    },
  },
});

export const {
  setMainBannerSlide,
  setNewLaunchesSlide,
  setLiveCasinoSlide,
  setSlotsSlide,
  setHashSlide,
  setSportSlide,
  setFuturesSlide,
  setCryptograSlide,
  setTableGamesSlide,
  setLatestEarningsSlide,
  setGameManufacturersSlide,
  resetAllCarousels,
} = carouselSlice.actions;

export default carouselSlice.reducer;
