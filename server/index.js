const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()

const controller = require('./controller')

const app = express()
const port = 3020

app.use(session({
    secret: 'tiddlywinks',
    saveUninitialized: true,
    resave: false
}))
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
app.get('/api/posts', controller.getPosts)
app.post('/api/newpost', controller.addPost)
app.post('/api/auth/logout', (req,res)=>{
    req.session.destroy()
    console.log(req.session)
})
app.get('/api/auth/me', controller.sessionUser)



