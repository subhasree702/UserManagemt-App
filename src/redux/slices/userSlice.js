import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload];
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    refreshUsers: (state) => {
      state.users = [];
      state.page = 1;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  incrementPage,
  refreshUsers,
} = userSlice.actions;

export default userSlice.reducer;
