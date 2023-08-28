const GoogleStrategy = require("passport-google-oauth20")
GoogleStrategy.Strategy;
const passport = require("passport");
passport.use(
    new GoogleStrategy(
        {
			clientID:process.env.CLIENT_ID ,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "http://localhost:8080/auth/google/callback",
			scope: ["profile", "email"],
		},
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
          
    )
)

passport.serializeUser((user , done)=>{
    done(null , user)
})
passport.deserializeUser((user , done)=>{
    done(null , user)
})