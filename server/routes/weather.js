const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/getWeather', async(req, res) => {

    try {
        
        

        const weatherDetails = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.query.location}`);
       
        const weather = {
            "temp_f": weatherDetails.data.current.temp_c,
            "climate": weatherDetails.data.current.condition.text,
            "wind":  weatherDetails.data.current.wind_mph,
            "feels_like":  weatherDetails.data.current.feelslike_f
             };
        // console.log(weatherDetails.data);
        return res.status(200).json(weather);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }



});



module.exports = router;