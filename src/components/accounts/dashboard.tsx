"use client";
import {
  Box,
  CardHeader,
  Typography,
  Skeleton,
  Avatar,
  Button,
} from "@mui/material";
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
import { useRouter } from "next/navigation";

export default function DashboardComponent() {
  const profile = useSelector((state: RootState) => state.profile.profile);

  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [studentProfile, setStudentprofile] = useState<any>(undefined);

  //variables
  const _id = user ? user._id : "";
  const userName = user ? user.userName : "";
  useEffect(() => {
    if (!profile) {
      (async () => {
        if (_id) {
          const response = await Profile.getProfile(_id);
          if (response.ok) {
            setStudentprofile(response.value);
            dispatch(updateProfile(response.value));
          }
        } else {
          router.push("/login");
        }
      })();
    } else {
      setStudentprofile(profile);
    }
  }, [profile, _id, dispatch, router]);
  //console.log(studentProfile);

  if (studentProfile === undefined) return <InfoAlert message="loading..." />;
  if (studentProfile === null)
    return (
      <Box
        minWidth={{ xs: "100%", md: "80%" }}
        maxWidth={{ xs: "100%", md: "80%" }}
      >
        <Typography mb={2} variant="body2">
          {" "}
          No Profile found
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/dashboard/profile");
          }}
        >
          Add Profile
        </Button>
        <Button
          sx={{ ml: 2 }}
          variant="outlined"
          onClick={() => {
            router.push("/dashboard/course-details");
          }}
        >
          Go to classroom
        </Button>

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

        {/* <CourseDetailsProgress /> */}
      </Box>
    );
  return (
    <Box
      minWidth={{ xs: "100%", md: "80%" }}
      maxWidth={{ xs: "100%", md: "80%" }}
    >
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
            text={userName}
            component={<Typography>{`@${userName}`}</Typography>}
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
      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        onClick={() => {
          router.push("/dashboard/course-details");
        }}
      >
        Go to classroom
      </Button>

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

      {/* <CourseDetailsProgress /> */}
    </Box>
  );
}
