import {
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const router = useRouter();
  return (
    <Box bgcolor={"black"} color={"orange"} p={2}>
      <Box>
        <Typography color={"white"} textAlign={"center"}>
          Follow us on social media
        </Typography>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            onClick={() => {
              window.location.href =
                "https://www.facebook.com/profile.php?id=100094022806445";
            }}
          >
            <FacebookIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href =
                "https://instagram.com/blackwizardstechnology?igshid=NTc4MTIwNjQ2YQ==";
            }}
          >
            <InstagramIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href = "https://twitter.com/black69839";
            }}
          >
            <TwitterIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/channel/UComBxZWqlLgol-H9M0LT3Aw";
            }}
          >
            <YouTubeIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href =
                " https://chat.whatsapp.com/C5yfcxVJjxBDgGpixro9Qb";
            }}
          >
            <WhatsAppIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href =
                "https://www.tiktok.com/@user5116847818522";
            }}
          >
            <Image src={"/assets/tiktok.png"} width={20} height={20} alt="" />
          </IconButton>
        </Box>
      </Box>
      <Box mt={5}>
        <Card
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Contact Details:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Office address:
            </Typography>
            <Typography sx={{ color: "black", mb: 0.5 }}>
              No 204 Aba Road,Rumuola, Port Harcourt,Rivers State
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Email:
            </Typography>
            <Typography sx={{ color: "black", mb: 0.5 }}>
              info@blackwizardstechnology.com
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Phone:
            </Typography>
            <Typography sx={{ color: "black", mb: 0.5 }}>
              09127845769
            </Typography>
          </CardContent>
        </Card>
      </Box>
      {/* <Box mt={5}>
        <Link href={"/about-us"} style={{ color: "orange" }}>
          About Us
        </Link>
        <Link href={"/careers"} style={{ marginLeft: "1rem", color: "orange" }}>
          Careers
        </Link>
        <Link href={"/courses"} style={{ marginLeft: "1rem", color: "orange" }}>
          Free Clases
        </Link>
      </Box> */}
    </Box>
  );
}

export default Footer;
