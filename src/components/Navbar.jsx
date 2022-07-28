import React, { useState } from "react";
import {
   Box,
   AppBar,
   Typography,
   Toolbar,
   IconButton,
   Collapse,
   Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import logo from "../assets/logo.png";

const FollowBox = styled(Box)({
   display: "grid",
   placeItems: "center",
   width: "150px",
   height: "40px",
   borderRadius: "100px",
   border: "1px solid",
   overflow: "hidden",
});

const HoverIconButton = styled(IconButton)({
   cursor: "pointer",
   "&:hover": {
      backgroundColor: "#000",
   },
});

const MenuBox = styled(Box)({
   margin: 12,
});
const SocialIcons = () => (
   <>
      <HoverIconButton
         href="https://www.facebook.com/SpartanRacingSJSU"
         target="_blank"
         rel="noopener noreferrer">
         <FacebookIcon sx={{ color: "white" }} />
      </HoverIconButton>
      <HoverIconButton
         href="https://www.instagram.com/sjsuformulasae/"
         target="_blank"
         rel="noopener noreferrer">
         <InstagramIcon sx={{ color: "white" }} />
      </HoverIconButton>
      <HoverIconButton
         href="https://www.linkedin.com/school/sjsufsae/"
         target="_blank"
         rel="noopener noreferrer">
         <LinkedInIcon sx={{ color: "white" }} />
      </HoverIconButton>
   </>
);

function Navbar() {
   const [followHover, setFollowHover] = useState(false);

   return (
      <Box>
         <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
            <Toolbar disableGutters>
               <IconButton sx={{ mr: 2, ml: 2 }}>
                  <img
                     src={logo}
                     style={{ width: "140px", height: "auto" }}
                     alt="logo"
                  />
               </IconButton>
               <Typography
                  variant="h3"
                  sx={{
                     fontWeight: "bold",
                     fontStyle: "italic",
                     flexGrow: 1,
                  }}>
                  SPARTAN RACING
               </Typography>

               <Box
                  sx={{
                     display: "flex",
                     flexGrow: 6,
                     justifyContent: "flex-end",
                  }}>
                  <MenuBox>
                     <Typography variant="h6">About</Typography>
                  </MenuBox>
                  <MenuBox>
                     <Typography variant="h6">The Team</Typography>
                  </MenuBox>
                  <MenuBox>
                     <Typography variant="h6">Our Cars</Typography>
                  </MenuBox>
                  <MenuBox>
                     <Typography variant="h6">Sponsors</Typography>
                  </MenuBox>
                  <MenuBox>
                     <Typography variant="h6">Gallery</Typography>
                  </MenuBox>
                  <MenuBox>
                     <Typography variant="h6">Contact Us</Typography>
                  </MenuBox>
               </Box>

               <FollowBox
                  sx={{ mr: 2, ml: 2 }}
                  onMouseEnter={() => setFollowHover(true)}
                  onMouseLeave={() => setFollowHover(false)}>
                  <Collapse in={followHover}>
                     <SocialIcons />
                  </Collapse>
                  <Typography variant="h6" hidden={followHover}>
                     Follow Us
                  </Typography>
               </FollowBox>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Navbar;
