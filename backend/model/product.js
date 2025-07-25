const mongoose=require('mongoose')
const review = require('./review')

const Schema=mongoose.Schema

let sch=new Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true,default:'women',enum:['women','kid','men']},
    new_price:{type:Number,required:true},
    old_price:{type:Number,required:true},
    available:{type:Boolean,default:true},
    review:[{type:Schema.Types.ObjectId,ref:'review'}]
})

sch.post("findOneAndDelete",async(data)=>{
if (data) {
    await review.deleteMany({ _id : { $in : data.review }})
}
})

let product=mongoose.model("product",sch)
module.exports=product

