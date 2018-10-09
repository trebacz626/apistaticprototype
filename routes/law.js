var express = require("express");
var laws =[
    {
        id:1,
        name:"Bardzo fajna ustawa",
        positiveVotes:123,
        negativeVotes:12
    },
    {
        id:2,
        name:"Bardzo zla ustawa",
        positiveVotes:12,
        negativeVotes:321
    }
];

module.exports=function(router){
    router.get("/laws/:id",function(req,res,next){
        if(req.params.id<laws.length)
            res.send(laws[req.params.id])
        else
            res.send("This user doesn't exist")
    })
    
    router.get("/laws/:id/getmyvote",function(req,res,next){
        console.log("user")
        console.log(res.locals.user);
        if(res.locals.user&&res.locals.user.id===1){
            
            if(Number(req.params.id)===1)res.send(true);
            else res.send(false);
        }else{
            if(Number(req.params.id)===1)res.send(false);
            else res.send(true);
        }
    })
}