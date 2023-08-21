import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
export default function UserDetailsBottomNavigation({
  completedCourses,
  totalEarning,
  referrals,
}: {
  completedCourses: number;
  totalEarning: number;
  referrals: number;
}) {
  return (
    <Box
      sx={{ width: "95%" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      p={2}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        mr={2}
      >
        <SchoolIcon />
        <Typography variant="caption">{completedCourses}</Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        mr={2}
      >
        <GroupsIcon />
        <Typography variant="caption">{referrals}</Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        mr={2}
      >
        <AttachMoneyIcon />
        <Typography variant="caption">{totalEarning}</Typography>
      </Box>
    </Box>
  );
}
