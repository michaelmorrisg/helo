module.exports = {
    addUser: (req,res)=>{
        const db = req.app.get('db')

        db.add_user({name:req.body.username, password:req.body.password})
        .then(response=>
            {
                req.session.userid = response[0].id
                res.status(200).send(response)
            }).catch(err=>console.log(err))
    },
    getUsers: (req,res)=>{
        const db = req.app.get('db')

        db.get_users()
        .then(response=>res.status(200).send(response))
    },
    findUser: (req,res)=>{
        const db = req.app.get('db')

        db.find_user({user: req.params.user, password: req.params.password})
        .then(response=>{
            if(response[0]){
            req.session.userid = response[0].id
            res.status(200).send(response)
            // console.log(req.session)
        }
        else{
            res.status(200).send(response)
        }})
    },
    getPosts: (req,res)=>{
        const db = req.app.get('db')

        db.get_posts()
        .then(response=>res.status(200).send(response))
    },
    addPost: (req,res)=>{
        const db = req.app.get('db')

        db.add_post({id:req.session.userid,title:req.body.title,content: req.body.content, image: req.body.image})
        .then(response=>res.status(200).send(response))
    },
    sessionUser: (req,res)=>{
        const db = req.app.get('db')

        db.session_user({id:req.session.userid})
        .then(response=>{res.status(200).send(response)
            console.log(response)
            console.log(req.session.userid)})

    }
}