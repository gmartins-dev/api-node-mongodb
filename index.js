const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Person = require('./models/Person')


//JSON reader - middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//API routes

app.post('/person', async (req, res) => {

    const {name, salary, approved} = req.body

    //check req/validation
    if(!name && !salary && !approved) {
        res.status(422).json({error: 'All infos is required!'})
    } 
    if(!name) {
        res.status(422).json({error: 'Name info is required!'})
    }
    if(!salary) {
        res.status(422).json({error: 'Salary info is required!'})
    }
    if(typeof approved != 'boolean') {
        res.status(422).json({error: 'Approved status info is required!'})
    }

    const person = {
        name,
        salary,
        approved
    }

    try {
        //creating data
        await Person.create(person)
        res.status(201).json({message: 'Person insert with sucess!'})
    } catch (error) {
        res.status(500).json({error: error})
    }

})



//root / endpoint
app.get('/', (req, res) => {

    //show req

    res.json({message: 'Hi Express!'})
})




//ports

const DB_USER = 'guilhermemm-dev'
const DB_PASSWORD = encodeURIComponent('gmmdev123')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-cluster.3ghz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
    .then( () => {
        console.log("MongoDB Connected!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))



