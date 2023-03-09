const router=require('express').Router();
const User=require('./collectionModel').User;

router.route('/').get((req,resp)=>{
    User.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});

router.route('/signup').post((req,resp)=>{


    const newUser=new User();
    newUser.userName=req.body.userName;
    newUser.fullName=req.body.fullName;
    newUser.password=req.body.password;
    newUser.email=req.body.email;
    

    newUser.save()
    .then(resp.json("insertting successful"))
    .catch(err=>resp.json('error : '+err))
});

router.route('/signin').post((req,resp)=>{

    const {userName,password}=req.body;

    const newUser={
        fullName:fullName, 
        password:password

        }
    User.find({fullName:{fullName},password:{password}})
        .then(users=>{
            resp.json("signin succesfull")
        })
        .catch(err=>resp.json('error : '+err))

    
});
module.exports = router;