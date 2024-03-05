import { configureStore } from "@reduxjs/toolkit";
import { api } from "./userAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import pageReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
