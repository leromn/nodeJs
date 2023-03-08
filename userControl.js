const router=require('express').Router();
const Message=require('./collectionModel').Message;

router.route('/').get((req,resp)=>{
    Message.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json('error : '+err))
});

router.route('/send').post((req,resp)=>{

    const {sender,reciever,message}=req.body;

    const newMessage=new Message({
        sender:sender,
        reciever:reciever,
        message:message,
    })

    newUser.save()
    .then(resp.json('inserted successfully'))
    .catch(err=>resp.json('error : '+err))
});

module.exports = router;
