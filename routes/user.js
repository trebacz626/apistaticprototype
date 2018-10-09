var express = require("express");
var users =[
    {
        id:1,
        email:"admin1@gmail.com",
    },
    {
        id:2,
        email:"user@a.pl",
    },
];

module.exports=function(router){
    router.get("/users/:id",function(req,res,next){
        console.log("getting user")
        if(req,params.id<users.length)
            res.send(user[req.params.id])
        else
            res.send("This user doesn't exist")
    })

    router.post("/authenticate/login",function(req,res,next){
        console.log(req.body);
        console.log(req.body.password==="admin")
        console.log(req.body.email==="admin1@gmail.com");
        if(req.body.password==="admin"&&req.body.email==="admin1@gmail.com"){
            res.send({
                "refreshToken":"refresh",
                "accessToken":"access"
            })
        }else{
            res.send({
                err:"login admin1@gmail.com password admin"
            })
        }
    })

    router.post("authenticate/register",function(req,res,next){
        res.send({
            message:"register is not implemented yet"
        })
    });

    router.post("/authenticate/refreshAccessToken",function(req,res,next){
        if(req.body.refreshToken==="refresh")
            res.send({
                accessToken:"access"
            });
        else
            res.send({
                message:"there is no refresh token like this"
            })
    });
    
    // router.get("/",function(req,res,next){
    //     res.send(users);
    // })
}
