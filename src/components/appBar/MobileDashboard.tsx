import { Grid, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import DP from "../Dp";
import Dashboardmenu from "../Dashboardmenu";
import MenuDrawer from "../drawer/DashboardMenuDrawer";
import DashBoardNotification from "../DashboardNotification";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoutSwitch from "../LogoutSwitch";

export default function MobileDashboard() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <MenuDrawer>
            <Box>
              <DP />

              <Dashboardmenu />
            </Box>
          </MenuDrawer>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <AppBarLogo />
        </Grid>

        <Grid
          item
          xs={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <DashBoardNotification />
        </Grid>
        <Grid
          item
          xs={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <LogoutSwitch />
        </Grid>
      </Grid>
    </Box>
  );
}
export function AppBarLogo() {
  const router = useRouter();
  return (
    <Image
      alt="Black Wizards Technology"
      src="/assets/logo.jpg"
      width={100}
      height={70}
      style={{ marginRight: ".5rem" }}
      onClick={() => {
        router.push("/");
      }}
    />
  );
}
