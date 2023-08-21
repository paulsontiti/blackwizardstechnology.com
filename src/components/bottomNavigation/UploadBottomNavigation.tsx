import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import UploadFloatingButton from "../fab/UploadFloatingButton";

export default function UploadBottomNavigation({ label }: { label: string }) {
  const [value, setValue] = useState(0);

  return (
    <Box ml={1}>
      <BottomNavigation
        sx={{ bgcolor: "inherit" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={label}
          icon={<UploadFloatingButton handleClick={() => {}} />}
        />
      </BottomNavigation>
    </Box>
  );
}
