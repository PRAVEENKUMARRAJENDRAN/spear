import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getWeatherReportstart } from "../redux/actions/weatherActions";
import  WeatherComponent  from "../components/WeatherComponent";

const WeatherListing = () => {
  const weatherReport = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(weatherReport);

  const fetchWeatherReport = async () => {
     const data = "08831" 
    const response = await axios
      .get(`http://localhost:5000/api/weather/getWeather?location=${data}`)
      .catch((err) => {
        console.log("Error", err);
      });
    console.log("api",response.data)
    dispatch(getWeatherReportstart(response.data));
  };

  useEffect(() => {
    fetchWeatherReport();
  }, []);

  return (
    <div>
      <WeatherComponent />
    </div>
  );
};

export default WeatherListing;
