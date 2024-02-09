import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WeatherCard from "./WeatherCard";
import { useSelector } from "react-redux";

const WeathersCardContainers = () => {
  const WeatherData = useSelector((store) => store?.weather?.WeatherData);
  return (
    <Box sx={{ mt: { md: 7, xs: 2 } }}>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between"}}
      >
        <WeatherCard
          title="Wind Status"
          speed={WeatherData?.current?.wind_mph}
          direction={WeatherData?.current?.wind_dir}
          unit="Mpn"
          icon="mdi:weather-dust"
          bgImage="https://wallpaperaccess.com/full/1461880.jpg"
        />
        <WeatherCard
          title="Humidity"
          speed={WeatherData?.current?.humidity}
          direction={WeatherData?.current?.humidity}
          unit="%"
          icon="material-symbols-light:mode-heat"
          bgImage="https://images.hdqwalls.com/wallpapers/dark-evening-lake-5k-a9.jpg"
        />
      </Stack>
      <Stack direction="row">
        <WeatherCard
          title="Air Pressure"
          speed={WeatherData?.current?.pressure_in}
          unit="Mb"
          icon="akar-icons:air"
          bgImage="https://a-static.besthdwallpaper.com/balloon-over-the-ocean-on-a-moonlit-night-wallpaper-1024x576-28684_44.jpg"
        />
        <WeatherCard
          title="Visiblity"
          speed={WeatherData?.current?.vis_miles}
          unit="Miles"
          icon="lets-icons:view-duotone"
          bgImage="https://www.hdwallpapers.in/download/fog_covered_spruce_trees_forest_white_sky_background_hd_winter-HD.jpg"
        />
      </Stack>
    </Box>
  );
};

export default WeathersCardContainers;
