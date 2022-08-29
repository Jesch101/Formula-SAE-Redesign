import React from "react";
import Navbar from "./components/Navbar";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";

function App() {
   return (
      <>
         <Router>
            <CssBaseline />
            <Navbar />
            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
