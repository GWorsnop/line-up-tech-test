import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  page: number;
}

// Here is what I think is causing my error in the UsersPage, but I don't know how to access searchParams at top level.
const initialState: PageState = {
  page: 1,
};

export const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    setToValue: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { increment, decrement, setToValue } = PageSlice.actions;

export default PageSlice.reducer;
