"use client";
import { Box } from "@mui/material";

import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
export default function FreeCourse() {
  const user = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  return (
    <Box
      component="img"
      sx={{ objectFit: "contain" }}
      width={"100%"}
      height={"auto"}
      src={"/assets/cover-photo.jpg"}
      onClick={() => {
        if (user && user.userName) {
          router.push("/dashboard/course-details");
        } else {
          router.push("/register");
        }
      }}
      alt="cover photo"
    />
  );
}
