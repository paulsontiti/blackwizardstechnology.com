import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ProfilePicUploader from "./ProfileUploader";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ProfilePic() {
  const { dpFileName } = useSelector((state: RootState) => state.users.user);
  const router = useRouter();

  const [imgLoadComplete, setImgLoadComplete] = useState(false);
  return (
    <Stack direction="row">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<ProfilePicUploader />}
      >
        {dpFileName ? (
          <IconButton
            sx={{ mt: 1, mr: 2 }}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <Image
              onLoadingComplete={() => {
                setImgLoadComplete(true);
              }}
              style={{
                borderRadius: "50%",
                display: imgLoadComplete ? "flex" : "none",
              }}
              width={80}
              height={80}
              alt="Profile picture"
              src={`/api/multer/profile-pic/${dpFileName}`}
            />
            {!imgLoadComplete && (
              <Skeleton
                variant="circular"
                width={80}
                height={80}
                animation="wave"
              />
            )}
          </IconButton>
        ) : (
          <IconButton>
            <Avatar sx={{ width: 80, height: 80 }} />
          </IconButton>
        )}
      </Badge>
    </Stack>
  );
}
