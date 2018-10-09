var express = require("express");


    var router = express.Router();
    router.use("/",function(req,res,next){
        if(req.headers.access_token==="access"){
            res.locals.user={
                id:1
            }
        }
        next();
    })
    require("./user")(router);
    require("./law")(router);

    module.exports = router;