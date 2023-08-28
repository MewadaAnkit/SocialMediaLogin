const express = require('express');
const passport = require('passport')
const router = express.Router();
const expressSession = require('express-session');
router.use(expressSession({
    secret: 'Something secret which is not known',
    resave: false,
    saveUninitialized: true,
    
}))


router.get('/auth/google/callback',passport.authenticate(
    "google",{
        successRedirect:process.env.CLIENT_URL ,
        failureRedirect:'/login/failed'
    }
))
router.get('/google' , passport.authenticate("google" , ["profile" , "email"]));

router.get('/',(req,res)=>{
    res.send('hellow wo')
})

router.get('/logout' ,(req, res)=>{
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

module.exports= router