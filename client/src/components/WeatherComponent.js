import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';


const WeatherComponent = () =>{
    const weatherReport = useSelector((state) => state.weatherReportDetails.weatherReport)
    console.log(weatherReport)
   
    return(
    <><p>{weatherReport}</p></>
    )
}


export default WeatherComponent;