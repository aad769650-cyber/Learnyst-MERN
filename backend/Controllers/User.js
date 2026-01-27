const { GenerateRefreshToken, GenerateAccessToken } = require("../auth/auth");
const { pool } = require("../db/db");
const { hashPassword, comparePassword } = require("../services/utils");

const handleSignupUser=async (req,res)=>{

    const body=req.body;

    // console.log("data",body);
 if(!body)return res.status(401).send({msg:"data Required"})

    const hashP=await hashPassword(body.password)
    // console.log( hashP);


    if(!hashP)return res.status(401).send({msg:"No Password"})

    const rows=await pool.execute(`insert into signup(name,email,password) values(?,?,?)`,[body.username,body.email,hashP])
    // console.log("inserted",body);
    

const accessToken=GenerateAccessToken(body)
const refreshToken=GenerateRefreshToken(body)



res.cookie("Access",accessToken)
res.cookie("refresh",refreshToken)



res.status(201).json({msg:"ok"})

    

}


const handleLoginUser=async (req,res)=>{

    const body=req.body;

    // console.log("data login",body);


    const [resp]=await pool.execute(`select * from signup where email=?`,[body.email])


    // console.log("data",resp);
    
    const matched=await comparePassword(body.password,resp[0].password)

// console.log("matched",matched);

    if(!matched){res.status(401).send({msg:"Wrong email or password"})}


const accessToken=GenerateAccessToken(body)
const refreshToken=GenerateRefreshToken(body)


res.cookie("Access",accessToken)
res.cookie("refresh",refreshToken)




    res.status(201).json({msg:"ok"})

    



}

module.exports={handleSignupUser,handleLoginUser}