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

function Footer() {
  const router = useRouter();
  return (
    <Box bgcolor={"black"} color={"orange"} p={2}>
      <Box>
        <Typography color={"white"} textAlign={"center"}>
          Follow us on social media
        </Typography>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <IconButton>
            <FacebookIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon sx={{ color: "orange" }} />
          </IconButton>
          <IconButton>
            <WhatsAppIcon sx={{ color: "orange" }} />
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
      <Box mt={5} display={"flex"} justifyContent={"flex-start"}>
        <Box minWidth={150}>
          {" "}
          <List
            subheader={
              <ListSubheader
                sx={{ bgcolor: "black", color: "white" }}
                component="div"
                id="nested-list-subheader"
              >
                Quick Links
              </ListSubheader>
            }
          >
            <ListItemButton
              onClick={() => {
                router.push("/");
              }}
            >
              <ListItemText
                primary={<Typography variant="caption">Home</Typography>}
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push("/about-us");
              }}
            >
              <ListItemText
                primary={<Typography variant="caption">About Us</Typography>}
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push("/mission");
              }}
            >
              <ListItemText
                primary={<Typography variant="caption">Mission</Typography>}
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push("/vision");
              }}
            >
              <ListItemText
                primary={<Typography variant="caption">Vision</Typography>}
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push("/careers");
              }}
            >
              <ListItemText
                primary={<Typography variant="caption">Careers</Typography>}
              />
            </ListItemButton>
          </List>
        </Box>
        <Box>
          {" "}
          <List
            sx={{ width: "100%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{ bgcolor: "black", color: "white" }}
                component="div"
                id="nested-list-subheader"
              >
                Courses
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Introduction To Software Engineering
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Introduction To Computing Systems
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Software Requirement Analysis & Engineering
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Software Architecture & Design
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Software Project Management
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Visualization(UI & UX)
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Introduction To Computer programming
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Programming in Javascript,Python & Golang
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">Web Development</Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">Mobile Development</Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    Database Management(SQL & NoSQL)
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">Software Testing</Typography>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
