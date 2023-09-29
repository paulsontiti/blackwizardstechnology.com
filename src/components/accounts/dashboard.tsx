"use client";
import { Box, CardHeader, Typography, Skeleton } from "@mui/material";
import Dp from "../profile/Dp";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { BlackDescription } from "../styledComponents/BlackDescription";
import {
  LoadingText,
  LoadingTextRectangular,
} from "../styledComponents/LoadingText";

export default function DashboardComponent() {
  const { profile } = useSelector((state: RootState) => state.profile);
  const { user } = useSelector((state: RootState) => state.users);
  console.log(user);
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <CardHeader
        sx={{ minWidth: "100%" }}
        avatar={<Dp />}
        title={
          <LoadingText
            text={profile?.firstName as string}
            component={
              <Typography>{`${profile?.firstName} ${
                profile && profile?.lastName
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
      <Box display={"flex"}>
        <Typography>Coursedetails</Typography>
        <Typography>Wallet</Typography>
        <Typography>Referral</Typography>
      </Box>
      <LoadingTextRectangular
        text={profile?.bio}
        component={
          <BlackDescription label="Bio" description={profile?.bio as string} />
        }
      />
    </Box>
  );
}
