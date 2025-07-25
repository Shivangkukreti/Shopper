const express=require('express')
const router=express.Router()
const user=require('../model/user.js')
let bcrypt=require('bcrypt')
let {authjwt,gentoken}=require('../middleware/authjwt.js')
const product = require('../model/product.js')




router.post('/signup',async(req,res)=>{
    let {email,password,name}=req.body
    if (!email || !password || !name) {
        return res.json({success:false,message:"missing data"})
    }
    let any=await user.findOne({email})
    try {
         if (any) {
        return res.json({success:false,message:"user with this email already exists !!"})
    }
    let hash=await bcrypt.hash(password,await bcrypt.genSalt(10)) 
    let newuser=new user({email,name,password:hash})
    await newuser.save()
    let token=gentoken(newuser.id)  
    res.json({success:true,message:'user created',newuser,token})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
})

router.post('/login',async(req,res)=>{
    let {email,password}=req.body
    if (!email || !password ) {
        return res.json({success:false,message:"missing data"})
    }
    try {
        let any=await user.findOne({email})
    if (!any) {
        return res.json({success:false,message:"user dont  exits"})
    }
    if (await bcrypt.compare(password,any.password)) {
        return res.json({success:true,message:"user logged in",token:gentoken(any.id)})
    } else {
        return res.json({success:false,message:"invalid cred"})
    } 
    } catch (error) {
        return res.json({success:false,message:error.message})
    }

})

router.get('/me',authjwt,async(req,res)=>{
    try {
       let id=req.user.id
    let me=await user.findById(id)
    res.json({success:true,me})  
    } catch (error) {
        res.json({success:false,message:error.message})
    }
   
})

router.post('/addtocart',authjwt,async(req,res)=>{
    let{id}=req.body
    try {
        let any=await product.findOne({id})
    let userid=req.user.id
  
    let myuser=await user.findById(userid)
    myuser.cartdata.push(any)
    myuser.save()
    res.json({success:true,message:'item added',any})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
})

router.post('/removefromcart',authjwt,async(req,res)=>{
    let{id}=req.body
    try {
        let userid=req.user.id
        let myuser=await user.findById(userid)
       let cart=myuser.cartdata.filter(ele=>ele.id!=id)
       myuser.cartdata=cart
       myuser.save()
        res.json({success:true,message:'item removed',cart})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
})


module.exports=router