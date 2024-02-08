import React from "react";
import SideBar from "../../components/sideBar/SideBar";

import WelcomePage from "./WelcomePage";
import { Box } from "@mui/material";

const Body = () => {
  return (
    <div className="bg-slate-500">
      <SideBar />
      <WelcomePage />
    </div>
  );
};

export default Body;
