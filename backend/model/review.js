const mongoose=require('mongoose')
const product = require('./product')
const Schema=mongoose.Schema


let sch=new Schema({
    username:{type:String,required:true},
    useremail:{type:String,required:true},
    comment:{type:String,required:true}
})

let review=mongoose.model('review',sch)
module.exports=review

