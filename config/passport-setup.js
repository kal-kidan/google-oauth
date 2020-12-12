
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser((user, done)=>{
    done(null, user.id)
})


passport.deserializeUser((user, done)=>{
    done(null, user.id)
})

passport.use(new GoogleStrategy({
    clientID: "400674313163-d0akkkpmlrst8o9qm2blsr313p36b4vp.apps.googleusercontent.com",
    clientSecret: "K8JsL96_W2t_QbQ6v7fLYN-1",
    callbackURL: "http://localhost:3000/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile);
    return done(null, profile);
  }
));
 

module.exports = passport