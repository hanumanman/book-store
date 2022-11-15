import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "redingList",
  initialState: [],
  reducers: {
    addToReadingList: (state, action) => {
      console.log(`add`, action.payload);
      return [...state, action.payload];
    },
    removeFromReadingList: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToReadingList, removeFromReadingList } = booksSlice.actions;

export default booksSlice.reducer;
