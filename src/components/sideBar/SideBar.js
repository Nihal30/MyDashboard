import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  dividerClasses,
  Box,
  Stack,
  Typography,
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
          <Box sx={{ bgcolor: "#334155", p: 1, width: 200 }}>
            <Stack>
              <Stack direction="row" sx={{display:"flex" ,justifyContent:"space-between"}}>
                {" "}
                <Typography sx={{color:"whitesmoke" ,fontSize:"22px"  ,mt:1,ml:2,fontWeight:"bold"}}>  Home</Typography>
                <IconButton
                  onClick={istoggleSidebar}
                  sx={{ alignItems: "end" }}
                >
                  <Icon
                    icon="lets-icons:close-square-duotone"
                    fontSize={30}
                    color="white"
                  />
                </IconButton>
              </Stack>
              
            </Stack>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
