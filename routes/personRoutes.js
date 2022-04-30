const router = require('express').Router()
const Person = require('../models/Person')

//Business Rules Section

//API routes

// CRUD - Create
router.post('/', async (req, res) => {

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


//CRUD - Read

    //Find All
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

    //Find one by id
router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const person = await Person.findOne({_id: id})
        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({error: error})
    }
})







module.exports = router