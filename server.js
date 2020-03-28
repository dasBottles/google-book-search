const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongoose
const db = require("./models");
mongoose.connect("mongodb://user:nHd2rQy5m!1O@ds149124.mlab.com:49124/heroku_0nfjggxk", { useNewUrlParser: true });


// Serve up static assets (usually on heroku)
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.use(routes)

app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
