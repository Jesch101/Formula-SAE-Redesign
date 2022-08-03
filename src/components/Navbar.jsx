import React, { useState } from "react";
import {
   Box,
   AppBar,
   Typography,
   Toolbar,
   IconButton,
   Collapse,
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
   "&:hover": {
      backgroundColor: "#fff",
   },
});

const HoverIconButton = styled(IconButton)({
   cursor: "pointer",
   color: "#212121",
});

const MenuBox = styled(Box)({
   margin: 12,
   border: "1px solid transparent",
   "&:hover": {
      backgroundColor: "#FFF",
      cursor: "pointer",
      borderRadius: "100px",
      border: "1px solid",
   },
});

const MenuText = styled(Typography)({
   padding: "5px",
   "&:hover": {
      color: "#212121",
   },
});

const SocialIcons = () => (
   <>
      <HoverIconButton
         href="https://www.facebook.com/SpartanRacingSJSU"
         target="_blank"
         rel="noopener noreferrer">
         <FacebookIcon sx={{ color: "#212121" }} />
      </HoverIconButton>
      <HoverIconButton
         href="https://www.instagram.com/sjsuformulasae/"
         target="_blank"
         rel="noopener noreferrer">
         <InstagramIcon sx={{ color: "#212121" }} />
      </HoverIconButton>
      <HoverIconButton
         href="https://www.linkedin.com/school/sjsufsae/"
         target="_blank"
         rel="noopener noreferrer">
         <LinkedInIcon sx={{ color: "#212121" }} />
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
                     justifyContent: "space-evenly",
                     alignItems: "center",
                  }}>
                  <MenuBox>
                     <MenuText variant="h6">About</MenuText>
                  </MenuBox>
                  <MenuBox>
                     <MenuText variant="h6">The Team</MenuText>
                  </MenuBox>
                  <MenuBox>
                     <MenuText variant="h6">Our Cars</MenuText>
                  </MenuBox>
                  <MenuBox>
                     <MenuText variant="h6">Sponsors</MenuText>
                  </MenuBox>
                  <MenuBox>
                     <MenuText variant="h6">Gallery</MenuText>
                  </MenuBox>
                  <MenuBox>
                     <MenuText variant="h6">Contact Us</MenuText>
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
