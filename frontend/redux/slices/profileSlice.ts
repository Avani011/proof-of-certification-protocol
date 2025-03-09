import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProfile: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
  },
});

export const { toggleProfile } = profileSlice.actions;
export default profileSlice.reducer;
