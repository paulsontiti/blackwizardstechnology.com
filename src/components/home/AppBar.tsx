import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Image from "next/image";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import EngineeringIcon from "@mui/icons-material/Engineering";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/router";
import {
  Button,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import StorageIcon from "@mui/icons-material/Storage";
import VisibilityIcon from "@mui/icons-material/Visibility";

const pages = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
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

  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            bgcolor: "black",
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 300,
              pl: 0,
              overflowY: "auto",
              color: "white",
              bgcolor: "black",
              height: "100vh",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body1">Home</Typography>}
              />
            </ListItemButton>
            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/about-us");
              }}
            >
              <ListItemIcon>
                <InfoIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body1">About Us</Typography>}
              />
            </ListItemButton>

            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/why-a-career-in-se");
              }}
            >
              <ListItemIcon>
                <EngineeringIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    Why a career in Software Engineering
                  </Typography>
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
      <Image
        src={"/assets/logo.jpg"}
        alt=""
        width={200}
        height={70}
        onClick={() => {
          router.push("/");
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "flex-end",
          mr: 5,
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
              color: "black",
              display: "block",
              textTransform: "capitalize",
            }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
}
export default HomeAppBar;
