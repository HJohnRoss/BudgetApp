require('dotenv').config(); 
const express = require('express')
const cookieParser = require('cookie-parser'); 
const cors = require('cors') 
const app = express()  

require('./config/mongoose.config')

app.use(cookieParser()); 
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); 
app.use(express.json()) 
app.use(express.urlencoded({extended: false})) 
require('./routes/user.routes.js')(app) 

app.listen(8001, () => { 
  console.log("Listening at Port 8001")
})