const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt')
const params=require('./params')

const checkNone=()=>{return (req,res,next)=>{next()}}
//const checkShopToken=require('../middleware/checkShopToken');

const param=params.shoppayment

const routeTemplate=[
    
    {route:"getcustom",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    
    {route:"getlimit",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    
    {route:"deletecustom",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},

    {route:"deletemany",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},

    {route:"addcustom",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},

    {route:"updatecustom",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},

]  

dataRt({router,param,routeTemplate})

module.exports = router;
