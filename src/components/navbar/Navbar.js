import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/slice/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <nav className="flex items-center justify-between bg-slate-700 p-2 z-10 ">
      <div className="flex items-center">
        <div className="mr-4 ml-2 cursor-pointer">
          {/* <img src="path/to/your/logo.png" alt="Your Logo" className="h-8 w-8" /> */}
          <Icon
            icon="material-symbols:dashboard-rounded"
            fontSize={30}
            color="white"
          />
        </div>
        <div className="text-white font-bold text-lg">Dashboard</div>
      </div>
      <div className="text-white cursor-pointer mr-2">
        <IconButton onClick={toggleSidebar}>
          <Icon icon="mingcute:menu-line" fontSize={30} color="white" />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
