import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFullScreenLoading: false,
} as Loader;

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsFullScreenLoading: (state, action) => {
      state.isFullScreenLoading = action.payload;
    },
  },
});

export const {setIsFullScreenLoading} = loader.actions;

export default loader.reducer;
