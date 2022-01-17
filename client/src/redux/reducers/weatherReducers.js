import { actionTypes } from '../constants/actionTypes';


const initalState = {
    weatherReport: []
}


export const getWeatherReport = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_REPORT_STARTED:
            return {
                ...state,
                weatherReport: action.payload
            }
            
    
        default:
            return state;
    }
}