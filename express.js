const express = require("express");
const app = express();
const mongoose=require('mongoose');
const cors=require('cors')

let Models=require('./collectionModel');

const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: "http://localhost:8081"
  };




const Demo=Models.Demo;
const Message=Models.Message;

app.use(cors(corsOptions));
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get("/", (request, response) => {
    response.send("Hi there");
});

const authenticationRouter=require('./authenticate');
const userControlRouter=require('./userControl');

app.use('/authenticate',authenticationRouter);
app.use('/user',userControlRouter);

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



