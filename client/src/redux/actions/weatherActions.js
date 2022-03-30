import { actionTypes } from "../constants/actionTypes";



export const getWeatherReportstart = (weatherReport) =>{
    return {
        type: actionTypes.GET_WEATHER_REPORT_STARTED,
        payload: weatherReport
    }
}