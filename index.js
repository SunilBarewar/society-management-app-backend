const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { connectDB } = require('./dbConnect.js')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

connectDB();


app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))

