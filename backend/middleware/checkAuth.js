const { VerifyAccess } = require("../auth/auth");

const checkAuth=(req,res,next)=>{

console.log("started",);

const accessToken=req?.cookies["Access"]

console.log("auth",accessToken);


if(!accessToken){
 return   res.status(201).send({msg:"No Access Token Please Login"})
}

// console.log("verifying...");

const token=VerifyAccess(accessToken)


// console.log("is expired...");
if(!token){
    console.log("Expired Access");
    
       return  res.status(201).send("Token Expired Please Refresh it")

}


next()


}

module.exports={checkAuth}