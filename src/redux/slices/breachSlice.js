import { createSlice } from '@reduxjs/toolkit';

const breachSlice = createSlice({
  name: 'breaches',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBreachesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBreachesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchBreachesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBreachesRequest, fetchBreachesSuccess, fetchBreachesFailure } = breachSlice.actions;

export default breachSlice.reducer;
