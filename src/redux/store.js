import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./news-slice";

export const store = configureStore({
  reducer: {
    news: NewsReducer,
  },
});
