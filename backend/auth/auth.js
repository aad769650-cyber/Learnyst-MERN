const jwt=require("jsonwebtoken")
const AccessTokenKey="BAkr@abd"
const refreshTokenKey="marabd143"

const GenerateAccessToken=(res)=>{


    console.log("res",res);

const payload={name:res.username,email:res.email}
    const token=jwt.sign(payload,AccessTokenKey,{expiresIn:'24h'})
    console.log("access",token);
    return token
    
}


const GenerateRefreshToken=(res)=>{


    console.log(res);

const payload={name:res.username,email:res.email}
    const token=jwt.sign(payload,refreshTokenKey,{expiresIn:'7d'})
    console.log("refresh",token);
    return token
    
}



const VerifyAccess=(token)=>{
try {
         console.log("checking",token);
    const data=jwt.verify(token,AccessTokenKey)


    console.log("checking",data);
    
    return data
} catch (error) {
    
    if(error){
        return null
    }
}
}

const VerifyRefresh=(token)=>{
try {
         console.log("checking",token);
    const data=jwt.verify(token,refreshTokenKey)


    console.log("checking",data);
    
    return data
} catch (error) {
    
    if(error){
        return null
    }
}
}
module.exports={GenerateAccessToken,GenerateRefreshToken,VerifyAccess,VerifyRefresh}