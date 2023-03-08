const router=require('express').Router();
const User=require('./collectionModel').User;

router.route('/').get((req,resp)=>{
    User.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});

router.route('/signup').post((req,resp)=>{

    const {userName,fullName,password,email}=req.body;

    const newUser=new User({
        fullName:fullName,  
        userName:userName,
        password:password,
        email:email
    })

    newUser.save()
    .then(resp.json('inserted successfully'))
    .catch(err=>resp.json('error : '+err))
});

module.exports = router;