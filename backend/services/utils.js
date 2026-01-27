const bcrypt=require("bcrypt")
const hashPassword=async(password)=>{

    return await bcrypt.hash(password,10)
}
const comparePassword=async(password,hashP)=>{

    return await bcrypt.compare(password,hashP)
}
module.exports={hashPassword,comparePassword}