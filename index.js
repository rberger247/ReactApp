const express = require("express");
const mongoose = require('mongoose')
const passport = require('passport');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
require('./models/user');
require('./services/passport');
 mongoose.connect(keys.mongoURI)
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



app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
