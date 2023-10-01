"use client";
import { Badge, Drawer, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import InfoAlert from "../alerts/InfoAlerts";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Badge badgeContent={0} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <InfoAlert message=" No Notifications" />
      </Drawer>{" "}
    </>
  );
}
