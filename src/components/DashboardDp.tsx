import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

export default function DashboardDp() {
  const { dpFileName } = useSelector((state: RootState) => state.users.user);
  const router = useRouter();

  return (
    <IconButton
      onClick={() => {
        router.push("/dashboard");
      }}
    >
      {dpFileName ? (
        <BlackAvatar
          src={`/api/multer/profile-pic/${dpFileName}`}
          width={50}
          height={50}
          alt="profile pic"
        />
      ) : (
        <Avatar />
      )}
    </IconButton>
  );
}
export function BlackImage({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  const [imgLoadComplete, setImgLoadComplete] = useState(false);
  return (
    <>
      <Image
        onLoadingComplete={() => {
          setImgLoadComplete(true);
        }}
        style={{
          display: imgLoadComplete ? "flex" : "none",
        }}
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
      {!imgLoadComplete && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height}
          animation="wave"
        />
      )}
    </>
  );
}
export function BlackAvatar({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  const [imgLoadComplete, setImgLoadComplete] = useState(false);
  return (
    <>
      <Image
        onLoadingComplete={() => {
          setImgLoadComplete(true);
        }}
        style={{
          borderRadius: "50%",
          display: imgLoadComplete ? "flex" : "none",
        }}
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
      {!imgLoadComplete && (
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
      )}
    </>
  );
}
