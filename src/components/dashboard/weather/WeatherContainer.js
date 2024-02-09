import { Icon } from "@iconify/react";
import {
  Container,
  Card,
  TextField,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const WeatherContainer = ({ setCity }) => {
  const WeatherData = useSelector((store) => store?.weather.WeatherData);
  const [search, setSearch] = useState("new delhi");
  console.log("WeatherData", WeatherData);
  const handleSearch = (e) => {
    setCity(search);
  };
  return (
    <Container sx={{}}>
      <Card
        sx={{
          p: 2,
          mt: { md: 4, sm: 2, sx: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
          backgroundImage:
            "url(https://media.istockphoto.com/id/532378051/photo/night-sky-with-stars-and-clouds.jpg?s=612x612&w=0&k=20&c=M6HA8A8tq5cbJsAU0y39Qx6dTyoIti-CaYMi9WWbB_U=)", // Replace with your image path or URL
          backgroundSize: "cover", // Adjust the background size as needed
          backgroundPosition: "center", // Adjust the background position as needed
          color: "white",

          height: { md: 400, sx: 200 },
        }}
      >
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <TextField
            placeholder="TEXT"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ bgcolor: "#CBD5E1", color: "#101010", fontWeight: "bold" }}
          />

          <IconButton onClick={handleSearch} sx={{ cursor: "pointer" }}>
            <Icon
              icon="mingcute:search-fill"
              fontSize={{ md: 30, sx: 20 }}
              color="#CBD5E1"
            />
          </IconButton>
        </Box>
        <Box>
          <img
            src={WeatherData?.current?.condition?.icon}
            alt="ICON"
            style={{ width: 100 }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ display: "flex", fontSize: "25px", fontWeight: "bold" }}
          >
            {WeatherData?.current?.temp_c}
            <Icon icon="wi:degrees" fontSize={30} />C
          </Typography>
        </Box>
        <Box>{WeatherData?.location?.name}</Box>
        <Box sx={{ fontSize: "25px", fontWeight: "bold" }}>
          {WeatherData?.current?.condition.text}
        </Box>
        <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {WeatherData?.location?.localtime}
        </Box>
      </Card>
    </Container>
  );
};

export default WeatherContainer;
