import { Inter } from "next/font/google";
import { Box, Grid } from "@mui/material";
import DashboardmenuDrawer from "@/components/drawers/DashboardMenuDrawer";
import DashboardMenuList from "@/components/menu/DashboardMenuList";
import NotificationBell from "@/components/notification/NotificationBell";
import PageSecurity from "@/components/accounts/PageSecurity";
import BWTThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BWTThemeProvider>
          <PageSecurity />
          <Grid container>
            <Grid item xs={2} md={4}>
              <DashboardmenuDrawer />
            </Grid>
            <Grid item xs={10} md={8}>
              <Box display={"flex"} justifyContent={"flex-end"}>
                <NotificationBell />
              </Box>
            </Grid>
          </Grid>

          <Box display={"flex"} gap={2}>
            <Box display={{ xs: "none", sm: "block" }}>
              <DashboardMenuList />
            </Box>
            {children}
          </Box>
        </BWTThemeProvider>
      </body>
    </html>
  );
}
