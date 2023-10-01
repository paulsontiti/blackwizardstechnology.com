import { Typography } from "@mui/material";
import { BlackDivider } from "../menu/DashboardMenuList";

export default function VideoComponent({
  src,
  title,
}: {
  title?: string;
  src: string;
}) {
  return (
    <>
      <Typography fontWeight={"bold"} mt={5} mb={2}>
        {title}
      </Typography>
      <video controls controlsList="nodownload" width={"100%"}>
        <source src={src} type="video/mp4" />
      </video>{" "}
      <BlackDivider />
    </>
  );
}
