import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { ListItemIcon, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";

export default function Dashboardmenu() {
  const router = useRouter();

  const [openAccount, setOpenAccount] = React.useState(true);
  const [openProfile, setOpenProfile] = React.useState(true);
  const [openJob, setOpenJob] = React.useState(true);

  const accountHandleClick = () => {
    setOpenAccount(!openAccount);
  };

  const profileHandleClick = () => {
    setOpenProfile(!openProfile);
  };

  const jobHandleClick = () => {
    setOpenJob(!openJob);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        pl: 0,
        overflowY: "auto",
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
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1">Home</Typography>} />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={profileHandleClick} sx={{ ml: 0 }}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>

        <ListItemText
          primary={<Typography variant="body2">Profile</Typography>}
        />
      </ListItemButton>
    </List>
  );
}
export function ChangePassword({ router }: any) {
  return (
    <ListItemButton
      sx={{ ml: 0 }}
      onClick={() => {
        router.push("/dashboard/change-password");
      }}
    >
      {" "}
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="caption">Change Password</Typography>}
      />
    </ListItemButton>
  );
}

export function LiveChat({ router }: any) {
  return (
    <ListItemButton
      sx={{ ml: 0 }}
      onClick={() => router.push(`/chat/${process.env.CUSTOMER_SERVICE_ID}`)}
    >
      <ListItemIcon>
        <ContactSupportIcon />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="body1">Live Chat</Typography>}
      />
    </ListItemButton>
  );
}
