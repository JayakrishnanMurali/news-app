import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    allNews: [],
  },
  reducers: {
    setNews: (state, { payload }) => {
      state.allNews = payload;
    },
    setSearchNews: (state, { payload }) => {
      state.allNews = payload;
    },
  },
});

export const { setNews, setSearchNews } = newsSlice.actions;

export default newsSlice.reducer;
