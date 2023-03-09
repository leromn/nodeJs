const express = require("express");
const app = express();
const mongoose=require('mongoose');
const PORT = process.env.PORT || 3000;
let Models=require('./collectionModel');

const Demo=Models.Demo;
const Message=Models.Message;

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(PORT, () => {
    console.log("Listen on the port 3000...");
});
console.log('started listning');

const uri="mongodb+srv://esru2:Yonn4321@cluster0.sbh1vyc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true});
const connection=mongoose.connection;

connection.once('open',()=>{
        console.log('connected to database')
   });   


const authenticationRouter=require('./authenticate');
const userControlRouter=require('./userControl');

app.use('/authenticate',authenticationRouter);
app.use('/user',userControlRouter);