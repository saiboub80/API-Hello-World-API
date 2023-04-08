// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})

// Languages: 
const languagesController = require('./controllers/languages_controller.js')
app.use('/languages', languagesController)

//Random language selection
app.get("/languages/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * languages.length);
  const randomLanguage = languages[randomIndex];
  res.send(`Random language: ${randomLanguage}`);
});

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})