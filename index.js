const express = require("express");
const mongoose = require('mongoose')
const passport = require('passport');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
require('./models/User');
require('./services/passport');

 require('./services/passport')

 const app = express();


 app.use(
   cookieSession({
    maxAge: 30*24 *60*60 *10000,
    keys : [keys.cookieKey]
   })
 );
 app.use(passport.initialize())
 app.use(passport.session());
 
 require('./routes/authRoutes')(app)

mongoose.connect('mongodb://admin:mongo400@ds335275.mlab.com:35275/koolkidz')

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
