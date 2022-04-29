const express = require('express')
const app = express()


//JSON reader - middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//root / endpoint
app.get('/', (req, res) => {

    //show req

    res.json({message: 'Hi Express!'})
})




//ports
app.listen(3000)
