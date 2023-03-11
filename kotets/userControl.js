const router=require('express').Router();
const Message=require('./collectionModel').Message;
const Location=require('./collectionModel').Location;


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

    newMessage.save()
    .then(resp.json('message sent'))
    .catch(err=>resp.json('error : '+err))
});

router.route('/locUpdate').post((req,resp)=>{

    const {userName,lat,lng}=req.body;

    const myLocation=new Location({
        lat:lat,
        lng:lng,
        userName:userName
    })

    myLocation.save()
    .then(resp.json('location updated successfully'))
    .catch(err=>resp.json('error : '+err))
});



module.exports = router;
