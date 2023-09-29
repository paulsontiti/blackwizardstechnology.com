"use client";
import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
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

export default function DashboardMenuList() {
  const router = useRouter();
  return (
    <MenuList
      sx={{
        minWidth: { md: 250, lg: 300 },
        maxWidth: "100%",
        borderRight: "1px solid black",
        color: "black",
      }}
    >
      <MenuItem>
        <ListItemButton
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <ListItemIcon>
            <DashboardIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItemButton>
      </MenuItem>{" "}
      <BlackDivider />{" "}
      <MenuItem>
        <ListItemButton
          onClick={() => {
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
            router.push("/dashboard/course-details");
          }}
        >
          <ListItemIcon>
            <InfoIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Course Details</ListItemText>
        </ListItemButton>
      </MenuItem>{" "}
      <BlackDivider />
      <MenuItem>
        <ListItemButton
          onClick={() => {
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
          onClick={() => {
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
          onClick={() => {
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
          onClick={() => {
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
        <ListItemButton onClick={() => {}}>
          <ListItemIcon>
            <LogoutIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItemButton>
      </MenuItem>
    </MenuList>
  );
}

export function BlackDivider() {
  return <Divider color={theme.bwt[500]} sx={{ mt: 2, mb: 2 }} />;
}
