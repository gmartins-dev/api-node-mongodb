const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//JSON reader - middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//API routes
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


//root / endpoint
app.get('/', (req, res) => {

    //show req

    res.json({message: 'Hi Express!'})
})


//ports

const DB_USER = process.env.DB_USER
const DB_PASSWORD = (process.env.DB_PASSWORD)
const DB_ATLAS = process.env.DB_ATLAS

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_ATLAS}`
)
    .then( () => {
        console.log("MongoDB Connected!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))



