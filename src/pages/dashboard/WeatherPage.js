import React, { useState, useEffect } from "react";
import WeatherContainer from "../../components/dashboard/weather/WeatherContainer";
import WeathersCardContainers from "../../components/dashboard/weather/WeathersCardContainers";
import { Weather_Api_URL } from "../../utils/constent";
import { useDispatch } from "react-redux";
import { addWeatherResponse } from "../../redux/slice/weatherSlice";
import { Grid } from "@mui/material";

const WeatherPage = () => {
  const [city, setCity] = useState("new delhi");
  console.log("city", city);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch(Weather_Api_URL + `${city}&aqi=no`);
      const data = await response.json();
      // console.log("json", data);
      dispatch(addWeatherResponse(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="flex flex-wrap ">
      <Grid container>
        <Grid item md={6} sm={6} xs={12} >
          <WeatherContainer setCity={setCity} />
        </Grid>
        <Grid item md={6} sm={6} sx={12}>
          <WeathersCardContainers />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherPage;
