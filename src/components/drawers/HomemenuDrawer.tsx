"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardMenuList from "@/components/menu/DashboardMenuList";
import Logo from "@/components/home/Logo";
import NotificationBell from "../notification/NotificationBell";

export default function HomemenuDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Grid container>
      <Grid item xs={4}>
        {" "}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon />{" "}
            </IconButton>
            <Drawer
              anchor={"left"}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            >
              <DashboardMenuList />
            </Drawer>
          </Box>
          <Logo />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box
          mt={2}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <NotificationBell />
        </Box>
      </Grid>
    </Grid>
  );
}
