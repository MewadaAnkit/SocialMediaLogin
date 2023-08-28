const dotenv  = require('dotenv').config()
const express = require('express');
const cors  = require('cors');
const passport = require('passport')
const passportSetup = require("./passport")
//const routes = require('./routes/auth')
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const Port = process.env.PORT || 8080
app.use(require('./routes/auth'))
//.use(cookieParser());
app.use(express.json())

app.use(expressSession({
    secret: 'Something secret which is not known',
    resave: false,
    saveUninitialized: true,
    
}))

app.use(passport.initialize());
app.use(passport.session())
app.use(cors())

app.listen(Port , ()=>{
    console.log("Server Started Successfully")
})