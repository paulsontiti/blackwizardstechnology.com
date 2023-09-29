import { ProfileType } from "../types/forms";
import { StudentCourseDetailsT } from "../types/studentsCourseDetails";
import { UserType } from "../types/user";

export const userJSON = () => {
   
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const userStr = localStorage.getItem("user");
      //console.log(userStr)
      if (userStr) {
        const user = JSON.parse(JSON.stringify(userStr));
        if (user !== "undefined") {
          //console.log(user )
          return JSON.parse(user) as UserType;
        }
      }
    }
    return null;
  };
  export const profileJSON = () => {
   
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const profileStr = localStorage.getItem("profile");
      //console.log(profileStr)
      if (profileStr) {
        const profile = JSON.parse(JSON.stringify(profileStr));
        if (profile !== "undefined") {
          //console.log(user )
          return JSON.parse(profile) as ProfileType;
        }
      }
    }
    return null;
  };
  export const courseDetailsJSON = () => {
   
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const courseDetailsStr = localStorage.getItem("courseDetails");
      //console.log(profileStr)
      if (courseDetailsStr) {
        const courseDetails = JSON.parse(JSON.stringify(courseDetailsStr));
        if (courseDetails !== "undefined") {
          //console.log(user )
          return JSON.parse(courseDetails) as StudentCourseDetailsT;
        }
      }
    }
    return null;
  };