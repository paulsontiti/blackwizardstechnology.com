import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationBell() {
  return (
    <IconButton>
      <Badge badgeContent={2} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
