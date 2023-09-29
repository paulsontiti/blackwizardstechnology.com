

import { courseDetailsJSON } from "@/lib/functions/user";
import { StudentCourseDetailsT } from "@/lib/types/studentsCourseDetails";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    courseDetails: StudentCourseDetailsT | null;
};
const initialState: InitialStateType = {
    courseDetails: courseDetailsJSON(),
};
const courseDetailsSlice = createSlice({
  name: "courseDetails",
  initialState,
  reducers: {
  
    updateCourseDetails: (state, action) => {
      state.courseDetails = action.payload;
      localStorage.setItem('courseDetails',JSON.stringify(state.courseDetails))
    },
  },
  extraReducers: (builder) => {
  },
});

export const { updateCourseDetails } = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
