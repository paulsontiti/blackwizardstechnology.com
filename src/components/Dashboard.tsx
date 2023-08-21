import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { BlackAvatar } from "./DashboardDp";
import UserDetailsBottomNavigation from "./bottomNavigation/UserDetailsBottomNavigation";
import WebDevCourse from "./courses/WebDev";
function Dashboard() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Profile />
      <RecommendedCourses />
    </Box>
  );
}

export default Dashboard;

function Profile() {
  const { fullName, dpFileName, userName } = useSelector(
    (state: RootState) => state.users.user
  );
  return (
    <>
      <Box
        sx={{
          mt: 1,
          minWidth: "100%",
          maxWidth: "100%",
        }}
      >
        <CardHeader
          avatar={
            dpFileName ? (
              <BlackAvatar
                src={`/api/multer/profile-pic/${dpFileName}`}
                alt="Dp"
                width={70}
                height={70}
              />
            ) : (
              <Avatar sx={{ width: 70, height: 70 }} />
            )
          }
          title={
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <Typography textTransform={"capitalize"}>{fullName}</Typography>
              </Box>
            </>
          }
          subheader={userName && `@${userName}`}
        />

        <UserDetailsBottomNavigation
          referrals={0}
          totalEarning={0}
          completedCourses={0}
        />
      </Box>
    </>
  );
}

function RecommendedCourses() {
  return (
    <Box p={2}>
      <Typography mb={2} component={"h6"}>
        Recommended Courses
      </Typography>
      <WebDevCourse />
    </Box>
  );
}
