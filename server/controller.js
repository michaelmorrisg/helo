module.exports = {
    addUser: (req,res)=>{
        const db = req.app.get('db')

        db.add_user({name:req.body.username, password:req.body.password})
        .then(response=>res.status(200).send(response)).catch(err=>console.log(err))
    },
    getUsers: (req,res)=>{
        const db = req.app.get('db')

        db.get_users()
        .then(response=>res.status(200).send(response))
    },
    findUser: (req,res)=>{
        const db = req.app.get('db')

        db.find_user({user: req.params.user, password: req.params.password})
        .then(response=>res.status(200).send(response))
    }
}