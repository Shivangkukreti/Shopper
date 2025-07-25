const mongoose=require('mongoose')
const Schema=mongoose.Schema

let sch =new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    cartdata:{type:Array},
})

let user=mongoose.model('user',sch)
module.exports=user

