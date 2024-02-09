import React from "react";
import WeatherPage from "./WeatherPage";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import UserInteraction from "../../components/dashboard/UserInteraction";
import HouseSection from "../../components/dashboard/HouseSection";
import GameSection from "../../components/dashboard/GameSection";
import ProjectsSections from "../../components/dashboard/ProjectsSections";
import TechSection from "../../components/dashboard/TechSection";

const WelcomePage = () => {
  return (
    <div className="px-4">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { md: 10, sm: 8, sx: 1 },
          bgcolor: "yellow",
          p: 1,
          alignItems: "center",
        }}
      >
        <Typography>Welcome Hero</Typography>
        <Card sx={{ p: 1, borderRadius: 2 }}>
          <Typography> today 08-02-2024</Typography>
        </Card>
      </Box>
      <Box>
        {/* <Grid container> */}
          {/* <Grid item md={8} sm={6} xs={12}> */}
            <WeatherPage />
          {/* </Grid> */}
          {/* <Grid item md={4} sm={6} xs={12}>
            <UserInteraction />
          </Grid> */}
        {/* </Grid> */}
      </Box>
      <HouseSection />
      <GameSection />
      <ProjectsSections />
      <TechSection />
    </div>
  );
};

export default WelcomePage;
