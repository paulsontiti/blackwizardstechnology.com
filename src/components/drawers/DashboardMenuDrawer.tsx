"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/home/Logo";
import ListItemIcon from "@mui/material/ListItemIcon";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import WalletIcon from "@mui/icons-material/Wallet";
import LogoutIcon from "@mui/icons-material/Logout";
import ForumIcon from "@mui/icons-material/Forum";
import { useRouter } from "next/navigation";
import { ListItemButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { theme } from "@/app/layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { logout } from "@/store/slices/userSlice";
import { deleteProfile } from "@/store/slices/profileSlice";
import { deleteCourseDetails } from "@/store/slices/courseDetails";
import HomeIcon from "@mui/icons-material/Home";
import { DashboardListItemButton } from "../menu/DashboardMenuList";
export default function DashboardmenuDrawer() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
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
          <MenuList
            sx={{
              minWidth: { md: 250, lg: 300 },
              maxWidth: "100%",
              borderRight: "1px solid black",
              color: "black",
            }}
          >
            {" "}
            <MenuItem>
              <ListItemButton
                onClick={() => {
                  router.push("/");
                }}
              >
                <ListItemIcon>
                  <HomeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography>Home</Typography>
                </ListItemText>
              </ListItemButton>
            </MenuItem>{" "}
            <BlackDivider />{" "}
            <MenuItem>
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  router.push("/dashboard");
                }}
              >
                <ListItemIcon>
                  <DashboardIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography>Dashboard</Typography>
                </ListItemText>
              </ListItemButton>
              <BlackDivider />
            </MenuItem>{" "}
            <BlackDivider />{" "}
            <MenuItem>
              <ListItemButton
                onClick={() => {
                  setOpen(false);

                  router.push("/dashboard/profile");
                }}
              >
                <ListItemIcon>
                  <Person2Icon color="secondary" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </ListItemButton>
            </MenuItem>{" "}
            <BlackDivider />
            <MenuItem>
              <ListItemButton
                onClick={() => {
                  setOpen(false);

                  router.push("/dashboard/course-details");
                }}
              >
                <ListItemIcon>
                  <SchoolIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Classroom</ListItemText>
              </ListItemButton>
            </MenuItem>{" "}
            <BlackDivider />
            <MenuItem>
              <ListItemButton
                disabled
                onClick={() => {
                  setOpen(false);

                  router.push("/dashboard/recommended-courses");
                }}
              >
                <ListItemIcon>
                  <SchoolIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Recommended Courses</ListItemText>
              </ListItemButton>
            </MenuItem>
            <BlackDivider />
            <MenuItem>
              <ListItemButton
                disabled
                onClick={() => {
                  setOpen(false);

                  router.push("/dashboard/referral");
                }}
              >
                <ListItemIcon>
                  <Diversity1Icon color="secondary" />
                </ListItemIcon>
                <ListItemText>Referral</ListItemText>
              </ListItemButton>
            </MenuItem>
            <BlackDivider />
            <MenuItem>
              <ListItemButton
                disabled
                onClick={() => {
                  setOpen(false);

                  router.push("/dashboard/wallet");
                }}
              >
                <ListItemIcon>
                  <WalletIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Wallet</ListItemText>
              </ListItemButton>
            </MenuItem>
            <BlackDivider />
            <MenuItem>
              <ListItemButton
                disabled
                onClick={() => {
                  setOpen(false);

                  router.push("/community");
                }}
              >
                <ListItemIcon>
                  <ForumIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Community</ListItemText>
              </ListItemButton>
            </MenuItem>
            <BlackDivider />
            <MenuItem>
              <MenuListLogout />
            </MenuItem>
          </MenuList>
        </Drawer>
      </Box>
      <Logo />
    </Box>
  );
}
export function BlackDivider() {
  return <Divider color={theme.bwt[500]} sx={{ mt: 2, mb: 2 }} />;
}
export function MenuListLogout() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return (
    <ListItemButton
      onClick={() => {
        dispatch(logout());
        dispatch(deleteProfile());
        dispatch(deleteCourseDetails());
        router.push("/");
      }}
    >
      <ListItemIcon>
        <LogoutIcon color="secondary" />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </ListItemButton>
  );
}
