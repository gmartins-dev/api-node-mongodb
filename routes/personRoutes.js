const router = require('express').Router()
const Person = require('../models/Person')

//Business Rules Section

//API routes

// CRUD - (C)reate
router.post('/', async (req, res) => {

    const {name, salary, approved} = req.body

    //check req/validation
    if(!name && !salary && !approved) {
        res.status(422).json({error: 'All infos is required!'})
        return
    } 
    if(!name) {
        res.status(422).json({error: 'Name info is required!'})
        return
    }
    if(!salary) {
        res.status(422).json({error: 'Salary info is required!'})
        return
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
        return
    } catch (error) {
        res.status(500).json({error: error})
    }

})


//CRUD - (R)ead

    //Find All
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
        return

    } catch (error) {
        res.status(500).json({error: error})
    }
})

    //Find one by id
router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const person = await Person.findOne({_id: id})

        if(!person) {
            res.status(422).json({message: 'User not found!'})
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({error: error})
    }
})


//CRUD - (U)PDATE

router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved
    }

    try {
        const updatedPerson = await Person.updateOne({_id: id}, person)

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})




module.exports = router