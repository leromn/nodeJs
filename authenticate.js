const router=require('express').Router();
const User=require('./collectionModel').User;

router.route('/').get((req,resp)=>{
    User.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});


router.route('/signup').post((req,resp)=>{

    if(User.find({userName:req.body.userName})!=null){
        resp.json("username already exists")
    }

    else{
    const newUser=new User();
    newUser.userName=req.body.userName;
    newUser.fullName=req.body.fullName;
    newUser.password=req.body.password;
    newUser.email=req.body.email;
    

    newUser.save()
    .then(resp.json("insertting successful"))
    .catch(err=>resp.json('error : '+err)) 
    }

    
});


router.route('/signin').post((req,resp)=>{

    const {userName,password}=req.body;

    User.find({fullName:{fullName}})
        .then(user=>{
            if(user.password==password)
                console.log("correct username and password")
            else
                console.log("incorrect password")

            resp.json("signin succesfull")
        })
        .catch(err=>resp.json('error : '+err))

    
});


module.exports = router;