import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookstoreSlice.js";

export default configureStore({
  reducer: {
    readingList: booksReducer,
  },
});
