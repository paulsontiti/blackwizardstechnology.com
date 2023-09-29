import { useState } from "react";
import BlackAvatar from "../image/BlackAvatar";
import { Badge } from "@mui/material";
import ProfilePicUploader from "../avatar/ProfilePicUploader";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Dp() {
  const { profile } = useSelector((state: RootState) => state.profile);
  const dp = profile && (profile.dpFileName as string);
  return (
    <Badge
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      badgeContent={<ProfilePicUploader />}
    >
      <BlackAvatar
        src={`/tmp/dp/${dp}`}
        alt="Profile picture"
        width={70}
        height={70}
      />
    </Badge>
  );
}
