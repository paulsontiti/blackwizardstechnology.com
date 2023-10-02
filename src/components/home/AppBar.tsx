"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Button,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "./Logo";
import { BlackDivider } from "../drawers/DashboardMenuDrawer";
import SchoolIcon from "@mui/icons-material/School";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { logout } from "@/store/slices/userSlice";
import { DashboardListItemButton } from "../menu/DashboardMenuList";

const pages = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Contact Us", url: "/#contact-us" },
  { name: "Courses", url: "/courses" },
];
const settings = ["Profile", "Account", "Logout"];

function HomeAppBar() {
  const [openCourses, setOpenCourses] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const router = useRouter();
  const coursesHandleClick = () => {
    setOpenCourses(!openCourses);
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const _id = useSelector((state: RootState) => state.users.user?._id);
  return (
    <Toolbar disableGutters>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          item
          xs={3}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          justifyContent={"flex-start"}
        >
          <Box>
            <IconButton
              onClick={() => {
                setOpenDrawer(true);
              }}
              sx={{ color: "black" }}
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
              <List
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  pl: 0,
                  overflowY: "auto",
                  height: "100vh",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton
                  sx={{ ml: 0 }}
                  onClick={() => {
                    setOpenDrawer(false);
                    router.push("/");
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body1">Home</Typography>}
                  />
                </ListItemButton>
                <BlackDivider />
                <DashboardListItemButton />
                <ListItemButton
                  sx={{ ml: 0 }}
                  onClick={() => {
                    setOpenDrawer(false);
                    router.push("/about-us");
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body1">About Us</Typography>}
                  />
                </ListItemButton>
                <BlackDivider />
                <ListItemButton
                  sx={{ ml: 0 }}
                  onClick={() => {
                    setOpenDrawer(false);
                    router.push("/why-a-career-in-se");
                  }}
                >
                  <ListItemIcon>
                    <EngineeringIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">
                        Why a career in Software Engineering
                      </Typography>
                    }
                  />
                </ListItemButton>
                <BlackDivider />
                <ListItemButton
                  sx={{ ml: 0 }}
                  onClick={() => {
                    setOpenDrawer(false);
                    router.push("/courses");
                  }}
                >
                  <ListItemIcon>
                    <SchoolIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body1">Courses</Typography>}
                  />
                </ListItemButton>
                <BlackDivider />
                <ListItemButton
                  sx={{ ml: 0 }}
                  onClick={() => {
                    setOpenDrawer(false);
                    router.push("/#contact-us");
                  }}
                >
                  <ListItemIcon>
                    <PermPhoneMsgIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">Contact Us</Typography>
                    }
                  />
                </ListItemButton>
                {/* <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/careers");
              }}
            >
              <ListItemIcon>
                <WorkIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body1">Career</Typography>}
              />
            </ListItemButton> */}
              </List>
            </Drawer>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          md={3}
          justifyContent={"center"}
          display={"flex"}
          sx={{
            flexGrow: 1,
          }}
        >
          <Logo />
        </Grid>
        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
          xs={6}
          md={9}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  router.push(page.url);
                }}
                sx={{
                  my: 2,
                  mr: 2,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {_id ? (
            <>
              <IconButton
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                <Avatar />
              </IconButton>

              <Logout />
            </>
          ) : (
            <>
              {" "}
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  router.push("/register");
                }}
              >
                SignUp
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ ml: 1 }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  );
}
export default HomeAppBar;
export function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        dispatch(logout());
        router.push("/");
      }}
    >
      Logout
    </Button>
  );
}
