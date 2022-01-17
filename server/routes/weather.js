const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/getWeather', async(req, res) => {

    try {
        console.log("8",req.query)
        

        const weatherDetails = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.query.location}`);

        return res.status(200).json(weatherDetails.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }



});



module.exports = router;