import Head from "next/head";
import { useTheme, useMediaQuery } from "@mui/material";

import Providers from "@/store/provider";
import MobileDashboard from "./appBar/MobileDashboard";
export default function Layout(props: { children: any }) {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Providers>
        {mediaQuery ? <p></p> : <MobileDashboard />}
        {props.children}
      </Providers>
    </>
  );
}
