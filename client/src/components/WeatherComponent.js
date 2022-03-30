import React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useSpeechSynthesis } from "react-speech-kit";

//Material UI Import

const theme = createTheme({
  palette: {
    greyColor: {
      // Purple and green play nicely together.
      main: grey[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const WeatherComponent = () => {
  const weatherReport = useSelector(
    (state) => state.weatherReportDetails.weatherReport
  );
  console.log(weatherReport.temp_c);

  const { speak } = useSpeechSynthesis();


  const temp_f = String(weatherReport.temp_f);
  const climate = String(weatherReport.climate);
  const wind = String(weatherReport.wind);
  const feels_like = String(weatherReport.feels_like);

  return (
    <ThemeProvider theme={theme}>
      
        <Button
          size="small"
          color="greyColor"
          variant="contained"
          endIcon={<AcUnitOutlinedIcon />}
          onClick={() => speak({ text: "The temperature is " + temp_f + "fahrenheit" })}
        >
          Temperature Check
        </Button>

        <Button
          size="small"
          color="greyColor"
          variant="contained"
          endIcon={<AcUnitOutlinedIcon />}
          onClick={() => speak({ text: "It is " + climate })}
        >
         Climate Check
        </Button>

        <Button
          size="small"
          color="greyColor"
          variant="contained"
          endIcon={<AcUnitOutlinedIcon />}
          onClick={() => speak({ text: "The wind speed is" + wind + "miles per hour" })}
        >
         wind Check
        </Button>

        <Button
          size="small"
          color="greyColor"
          variant="contained"
          endIcon={<AcUnitOutlinedIcon />}
          onClick={() => speak({ text: "It feels like" + feels_like + "fahrenheit" })}
        >
         feels_like Check
        </Button>
  
    </ThemeProvider>
  );
};

export default WeatherComponent;
