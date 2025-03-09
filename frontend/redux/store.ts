import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice"; // Ensure correct path

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

// ✅ Correctly define RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
