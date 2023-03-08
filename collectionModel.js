const mongoose=require('mongoose');
const schema=mongoose.Schema;


const userSchema=new schema({
	fullName:{type:String,trim:true},
	userName:{type:String,required:true,unique:true,trim:true},
	password:{type:String,required:true,trim:true},
	email:{type:String,required:true},

},{timestamps:true});

const messageSchema=new schema({
	sender:{type:String},//insert their userName
	reciever:{type:String},
	message:{type:String,trim:true},

},{timestamps:true});

const regionSchema=new schema({
	location:{type:Number},
	userName:{type:String},

},{timestamps:true});




const Region =mongoose.model("Region",regionSchema);
const User=mongoose.model('User',userSchema);
const Message=mongoose.model('Messages',messageSchema);

module.exports.Region=Region;
module.exports.User=User;
module.exports.Message=Message;