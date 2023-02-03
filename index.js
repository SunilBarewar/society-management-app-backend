const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { connectDB } = require('./db/dbConnect.js')
const verifyJWTtoken = require('./MiddleWare/AuthorizeUser.js')
const bodyParser = require('body-parser')
const app = express();


const authRoute = require("./routes/AuthRoutes.js")
const votingRoute = require("./routes/VotingRoutes.js")
const eventRoute = require("./routes/eventRoutes.js")
const meetingRoute = require("./routes/meetingRoutes.js")
app.use(cors());
dotenv.config();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

connectDB();

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
app.use('/api/auth', authRoute)
app.use('/api/voting',votingRoute)
app.use('/api/event',eventRoute)
app.use('/api/meeting',meetingRoute)
