const express = require('express')
const app = express()
const passport = require('./config/passport-setup')
const Passport = require('passport');
const ejs = require('ejs')
app.use(express.json()) 
app.use(passport.initialize())
require('https').globalAgent.options.rejectUnauthorized = false;
 
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
   res.render('home')
})

app.get('/auth/login', passport.authenticate('google', {
   scope: ['profile']
}))

 app.get('/logout', (req, res)=>{
    console.log("logging out ..");
 })

 app.get('/auth/google', (req, res)=>{
    console.log("connecting with google");
 })

app.get('/auth/google/redirect', passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
function(req, res) {
  res.end('logged in');
})

app.get('/auth/google/failure', (req,res)=>{
   res.send("oops we couldn't authenticate your request..")
})

app.get('/auth/google/success', (req,res)=>{
   res.send("success!")
})

app.listen(3000, ()=>{
    console.log("app is running on port 3000..");
})