import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import { wrap } from "module";

export default function CourseHighlight() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ display: "flex", flexWrap: "wrap" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ minWidth: 150, mb: 5 }}
          label="24-Month
          Online Program"
          icon={
            <Box mb={2}>
              {" "}
              <Image
                src={"/assets/duration.svg"}
                alt=""
                width={50}
                height={50}
              />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ minWidth: 150, mb: 5 }}
          label="Recorded Lectures & Weekly Personalised Live Mentorship Sessions "
          icon={
            <Box mb={2}>
              {" "}
              <Image
                src={"/assets/recorded.svg"}
                alt=""
                width={50}
                height={50}
              />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ minWidth: 150, mb: 5 }}
          label="8-10 Hours
Commitment per Week"
          icon={
            <Box mb={2}>
              {" "}
              <Image src={"/assets/hours.svg"} alt="" width={50} height={50} />
            </Box>
          }
        />{" "}
        <BottomNavigationAction
          sx={{ minWidth: 150, mb: 5 }}
          label="Career guidance &
Hands-on Projects"
          icon={
            <Box mb={2}>
              {" "}
              <Image
                src={"/assets/hands-on-project.svg"}
                alt=""
                width={50}
                height={50}
              />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ minWidth: 150, mb: 5 }}
          label="Additional Bootcamp to learn the foundations of programming"
          icon={
            <Box mb={2}>
              {" "}
              <Image
                src={"/assets/strong-foundation.png"}
                alt=""
                width={50}
                height={50}
              />
            </Box>
          }
        />
      </BottomNavigation>
    </Box>
  );
}
