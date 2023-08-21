import * as React from "react";
import { IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelFloatingActionButtons from "../fab/CancelFloatingActionButton";

export default function MenuDrawer({ children }: { children: JSX.Element }) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div>
      <IconButton
        onClick={() => {
          console.log("Hello");
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        sx={{
          maxWidth: "50vw",
          padding: ".5rem",
        }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
          <IconButton>
            <CancelFloatingActionButtons
              handleClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            />
          </IconButton>
        </Box>
        {children}
      </Drawer>
    </div>
  );
}
