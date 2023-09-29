import { Avatar, Skeleton } from "@mui/material";
import { ImageProps } from "./BlackImage";
import Image from "next/image";
import React from "react";

export default function BlackAvatar({ src, alt, width, height }: ImageProps) {
  const [loading, setLoading] = React.useState(true);
  //width for image when loaded
  const [conditionalWidth, setConditionalWidth] = React.useState(0);
  //height for image when loaded
  const [conditionalHeight, setConditionalHeight] = React.useState(0);
  if (!src) return <Avatar sx={{ width: width, height: height }} />;
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid red",
  };
  return (
    <>
      <Image
        src={src}
        width={conditionalWidth}
        height={conditionalHeight}
        alt={alt}
        loading="eager"
        onLoad={() => {
          setLoading(false);
          setConditionalHeight(height);
          setConditionalWidth(width);
        }}
        style={imageStyle}
      />
      {loading && (
        <Skeleton variant="circular" animation="wave" width={70} height={70} />
      )}
    </>
  );
}
