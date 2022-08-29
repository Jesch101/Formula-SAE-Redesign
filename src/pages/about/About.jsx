import React from "react";
import { Box, Typography } from "@mui/material";
import "./about.css";
function About() {
   return (
      <div className="about">
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               alignItems: "center",
            }}>
            <Box
               sx={{
                  margin: "100px",
                  width: "65%",
                  height: "20rem",
                  backgroundColor: "rgba(33,33,33,0.85)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
               }}>
               <Typography
                  variant="h3"
                  sx={{ color: "#fff", padding: "20px 0 10px 0" }}>
                  Our Mission
               </Typography>
               <Box sx={{ width: "70%" }}>
                  <Typography
                     align="center"
                     sx={{
                        color: "#fff",
                        fontSize: "22px",
                        fontStyle: "italic",
                     }}>
                     Our mission is to prepare our members as best as possible
                     for their education, career, and any goals they wish to
                     accomplish.
                  </Typography>
               </Box>
            </Box>
         </Box>
      </div>
   );
}

export default About;
