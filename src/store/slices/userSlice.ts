import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/lib/types/user";
import { userJSON } from "@/lib/functions/user";

type InitialStateType = {
  user: UserType | null;
};
const initialState: InitialStateType = {
  user: userJSON(),
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user',JSON.stringify(state.user))
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // });
    // builder.addCase(fetchUser.pending, (state) => {
    //   state.loading = true;
    // });
  },
});

export const { logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
