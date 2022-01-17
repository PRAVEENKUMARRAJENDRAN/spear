import { combineReducers } from "redux";
import { getWeatherReport } from "./weatherReducers";

export const reducers = combineReducers({
    weatherReportDetails: getWeatherReport
})