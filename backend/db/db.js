const { createPool } = require("mysql2/promise")

     const pool=createPool({
host:"localhost",
user:"root",
password:"SunnySky42!",
database:"Learnyst"
        })
    

module.exports={pool}