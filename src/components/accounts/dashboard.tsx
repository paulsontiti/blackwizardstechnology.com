"use client";
import { Box, CardHeader, Typography, Skeleton, Avatar } from "@mui/material";
import Dp from "../profile/Dp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { BlackDescription } from "../styledComponents/BlackDescription";
import {
  LoadingText,
  LoadingTextRectangular,
} from "../styledComponents/LoadingText";
import Link from "next/link";
import VideoComponent from "../videos/VideoComponent";
import { useEffect, useState } from "react";
import InfoAlert from "../alerts/InfoAlerts";
import { CourseDetailsProgress } from "../course-details/CourseDetailsProgress";
import { Profile } from "@/lib/classes/profile";
import { updateProfile } from "@/store/slices/profileSlice";

export default function DashboardComponent() {
  const profile = useSelector((state: RootState) => state.profile.profile);
  const { user } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();
  const [studentProfile, setStudentprofile] = useState<any>(undefined);
  useEffect(() => {
    if (!profile) {
      (async () => {
        const response = await Profile.getProfile(user?._id as string);
        if (response.ok) {
          setStudentprofile(response.value);
          dispatch(updateProfile(response.value));
        }
      })();
    } else {
      setStudentprofile(profile);
    }
  }, [profile, user, dispatch]);

  if (studentProfile === undefined) return <InfoAlert message="loading..." />;
  if (studentProfile === null)
    return (
      <Box>
        <Typography mb={2} variant="body2">
          {" "}
          No Profile found
        </Typography>
        <Link href={"/dashboard/profile"}>Add Profile</Link>
        <VideoComponent
          src="/assets/11-year-old.mp4"
          title="11-Year Old Nigerian Simplifies Coding"
        />

        <VideoComponent
          src="/assets/coding-class.mp4"
          title=" 15-year-old starts online computer coding classes for kids of color"
        />

        <VideoComponent
          src="/assets/african-teenager.mp4"
          title="Is this African teenager a future coding superstar_ - BBC News"
        />

        <CourseDetailsProgress />
      </Box>
    );
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <CardHeader
        sx={{ minWidth: "100%" }}
        avatar={<Avatar />}
        title={
          <LoadingText
            text={studentProfile?.firstName as string}
            component={
              <Typography>{`${studentProfile?.firstName} ${
                studentProfile && studentProfile?.lastName
              }`}</Typography>
            }
            width={100}
            height={20}
          />
        }
        subheader={
          <LoadingText
            text={user?.userName as string}
            component={<Typography>{`@${user && user?.userName}`}</Typography>}
            width={100}
            height={20}
          />
        }
      />

      <LoadingTextRectangular
        text={studentProfile?.bio}
        component={
          <BlackDescription
            label="Bio"
            description={studentProfile?.bio as string}
          />
        }
      />

      <VideoComponent
        src="/assets/11-year-old.mp4"
        title="11-Year Old Nigerian Simplifies Coding"
      />

      <VideoComponent
        src="/assets/coding-class.mp4"
        title=" 15-year-old starts online computer coding classes for kids of color"
      />

      <VideoComponent
        src="/assets/african-teenager.mp4"
        title="Is this African teenager a future coding superstar_ - BBC News"
      />

      <CourseDetailsProgress />
    </Box>
  );
}
