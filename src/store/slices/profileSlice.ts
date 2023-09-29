
import { profileJSON } from "@/lib/functions/user";
import { ProfileType } from "@/lib/types/forms";
import { createSlice } from "@reduxjs/toolkit";


type InitialStateType = {
  profile: ProfileType | null;
};
const initialState: InitialStateType = {
    profile: profileJSON(),
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
  
    updateProfile: (state, action) => {
      state.profile = action.payload;
      localStorage.setItem('profile',JSON.stringify(state.profile))
    },
  },
  extraReducers: (builder) => {
    
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
