const router=require('express').Router();
const User=require('./collectionModel').User;
const checkDuplicateUsername  = require('./verifySignup').checkDuplicateUsername;


router.route('/').get((req,resp)=>{
    User.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});


router.route('/signup').post((req,resp)=>{  
    

    const newUser=new User({
      userName:req.body.userName,
      fullName:req.body.fullName,
      password:req.body.password,
      email:req.body.email
    });
      
    
    newUser.save()
    .then(()=>resp.json("user inserted to DB"))
    .catch(()=>resp.json('error : ')) 

    return;
               
});


router.route('/signin').post((req,res)=>{

    User.findOne({
        userName: req.body.username
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }
    
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
    
          if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
    
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email
          });
        });
    
});



module.exports = router;