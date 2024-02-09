import React from "react";
import CommonCard from "../CommonCard";
import { Box, Typography } from "@mui/material";

const HouseSection = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/03/83/72/82/360_F_383728241_OVY95VuV6Btyd0nxmPJ91VFasKvhvgGA.jpg)",
        fontSize: "25px",
        fontWeight: "bold",
        paddingBottom:2
      }}
    >
      <Box >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold",color:"whitesmoke",p:2 }}>
          MODULE
        </Typography>

        <CommonCard data={Dummy} />
      </Box>
    </div>
  );
};

export default HouseSection;

const Dummy = [
  {
    id: 1,
    title: "Netflix",
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    Dec: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
  },
  {
    id: 2,
    title: "Netflix",
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    Dec: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
  },
  {
    id: 3,
    title: "Netflix",
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    Dec: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
  },
];
