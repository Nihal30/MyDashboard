import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  dividerClasses,
  Box,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/slice/appSlice";

const SideBar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const dispatch = useDispatch();

  const istoggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <>
      {isSidebarOpen && (
        <Drawer anchor="right" open={isSidebarOpen}>
          <IconButton onClick={istoggleSidebar}>
            <Icon icon="mingcute:menu-line" fontSize={30} color="black" />
          </IconButton>
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
