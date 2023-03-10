const router=require('express').Router();
const User=require('../collectionModel').User;

function userExists(username){
 var userFound=false;

     User.find({userName:username})
    .then(user=>{
        if(user){
            if (user.username == username) {
                userFound=true;
            } else {
                userFound=false;
            }
        }
        else{
            userFound=false;
        }
    })
    .catch(err=>resp.json('error : '+err))

    

}

router.route('/').get((req,resp)=>{
    User.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});


router.route('/signup').post((req,resp)=>{

    const reqUserName=req.body.userName;
    const userTaken=userExists(reqUserName);
  
    console.log("user exists : "+userExists(reqUserName))

        if (userTaken==true) {
            console.log("username already exists")
            // resp.json("username already exist")
        } 

        // else {
        //     const newUser=new User();
        //     newUser.userName=reqUserName;
        //     newUser.fullName=req.body.fullName;
        //     newUser.password=req.body.password;
        //     newUser.email=req.body.email;
            
        //     newUser.save()
        //     .then(resp.json("user inserted to DB"))
        //     .catch(err=>resp.json('error : '+err)) 
            
        // }
    
});


router.route('/signin').post((req,resp)=>{

    const reqUserName=req.body.userName;
    const reqUserPass=req.body.password;

    console.log("user exists : "+userExists(reqUserName))

    // User.find({userName:reqUserName})
    //     .then(user=>{
    //         if(user){
    //             if (user.username == reqUserName) {
    //                 resp.json("username already exist")
    //             } else {
    //                 resp.json("user doesnot exist")
    //             }
    //         }
    //         else{
    //             resp.json("user doesnot exist")
    //         }

        
    //     })
    //     .catch(err=>resp.json('error : '+err))

    
});



module.exports = router;