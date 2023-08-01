//import './globals.css'
import Footer from "@/components/Footer";
import HomeAppBar from "@/components/home/AppBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body style={{ minWidth: "100vw", padding: 0, margin: 0 }}>
        <Box>
          <HomeAppBar />
          {children}
          <Footer />
        </Box>
      </body>
    </html>
  );
}
