

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
    deleteCourseDetails: (state) => {
      state.courseDetails = null;
      localStorage.removeItem('courseDetails')
    },
  },
  extraReducers: (builder) => {
  },
});

export const { updateCourseDetails ,deleteCourseDetails} = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
