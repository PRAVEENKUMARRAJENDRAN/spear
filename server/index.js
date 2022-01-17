const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors())
//To use the env variables
const dotenv = require("dotenv");
dotenv.config();


app.use(express.json({ extended: false }));

const PORT = process.env.PORT;

app.use('/api/weather', require('./routes/weather'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));