import { Icon } from "@iconify/react";
import { Card, LinearProgress, Typography } from "@mui/material";
import React from "react";

const WeatherCard = ({ title, speed, direction, unit, icon,bgImage }) => {
  console.log('direction', direction)
  return (
    <Card
      sx={{
        width: "100%",
        height: 150,
        borderRadius: 0,
        m: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage:
            `url(${bgImage})`, 
          backgroundSize: "cover", 
          color:"whitesmoke",
          minWidth:130
      }}
    >
      <Typography sx={{ fontSize: "20px", mt: 2, fontWeight: "bold" ,mt:5}}>
        {title}
      </Typography>
      <Typography
        gap={1}
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon icon={icon} fontSize={30} />
        {speed}
        {unit}
      </Typography>

      {title === "Wind Status" ? (
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {direction}
        </Typography>
      ) : (
        <LinearProgress variant="determinate"  />
      )}
    </Card>
  );
};

export default WeatherCard;
