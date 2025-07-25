const express=require('express')
const router=express.Router()
const multer = require('multer');
const {storage}=require('../config/cloud.js')
const upload = multer({ storage: storage }); 
let products=require('../model/product.js');
const { authjwt } = require('../middleware/authjwt.js');
const review = require('../model/review.js');
const user = require('../model/user.js');


router.get('/all',async(req,res)=>{
    try {
        let allproducts=await products.find().populate('review')
    res.json({success:true,allproducts})
    } catch (error) {
         res.json({success:false,message:error.message})
    }
    
})

 router.post('/addproduct',upload.single('image'),async(req,res)=>{
    try {
        let all=await products.find({})
        let {name,new_price,old_price,category,available}=req.body
        let id=all.at(-1).id+1
    let image
    if (req.file) {
        image=req.file.path
    }
    let x=new products({id,name,new_price,old_price,category,image,available})
    await x.save()
    console.log(x);
    
    res.json({success:true,x,message:'product added'})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
    
})   

router.post('/deleteproduct',async(req,res)=>{
    try {
      let {id}=req.body
    let x=await products.findOneAndDelete({id})
    if (!x) {
        return res.json({success:false,message:"no such product"})
    }
    res.json({success:true,message:'product deleted'})  
    } catch (error) {
        res.json({success:false,message:error.message})
    }
    

})

router.post('/addreview',authjwt,async(req,res)=>{
    try {
       let {id,comment}=req.body
    let pro=await products.findOne({id})
     if (!pro) {
        return res.json({success:false,message:"no such product"})
    }
    
    let userid=req.user.id
    let myuser=await user.findById(userid)
    let x=new review({username:myuser.name,comment,useremail:myuser.email})
    pro.review.push(x)
    await x.save()
    await pro.save()
    res.json({success:true,message:"review added"})  
    } catch (error) {
         res.json({success:false,message:error.message})
    }
})


router.get('/reviews',async(req,res)=>{
    try {
       let allreviews=await review.find()
    res.json({success:true,allreviews}) 
    } catch (error) {
         res.json({success:false,message:error.message})
    }  
})


router.post('/deletereview',authjwt,async(req,res)=>{
    try {
        let{revid,proid}=req.body
        let x=await review.findById(revid)
        if (!x) {
            return res.json({success:false,message:"no such review"})
        }
        if (x.useremail!=req.user.email) {
            return res.json({success:false,message:"u arent the owner"})
        }
        await products.findOneAndUpdate({id:proid},{$pull:{review:revid}})
        await review.findByIdAndDelete(revid)
        res.json({success:true,message:"review deleted"})
    } catch (error) {
         res.json({success:false,message:error.message})
    }
})



module.exports=router

