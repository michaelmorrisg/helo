const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()
const port = 3020

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(port, ()=>{
        console.log(`Craziness on port: ${port}`)
    })
})

/////Endpoints//////
app.post('/api/newuser',controller.addUser)
app.get('/api/finduser/:user/:password', controller.findUser)



