import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";

const pages = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Vision", url: "/vision" },
  { name: "Mission", url: "/mission" },
  { name: "Courses", url: "/courses" },
];
const settings = ["Profile", "Account", "Logout"];

function HomeAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();
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
    <Container maxWidth="xl" sx={{ zIndex: 100, position: "fixed", top: 5 }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  router.push(page.url);
                }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
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
                color: "orange",
                display: "block",
                bgcolor: "black",
                textTransform: "capitalize",
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
export default HomeAppBar;
