 const express=require("express");
const { handleSignupUser, handleLoginUser } = require("../Controllers/User");
const { checkAuth } = require("../middleware/checkAuth");
const { pool } = require("../db/db");
const path=require("path")
const router=express.Router();

const multer=require("multer");
const { hashPassword } = require("../services/utils");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
       return  cb(null,path.join(__dirname, "../uploads")
)
    },

    filename:(req,file,cb)=>{
        console.log("file",file);
        
return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploads=multer({storage})


router.post("/signup",handleSignupUser);
router.post("/login",handleLoginUser);


router.get("/services",checkAuth,(req,res)=>{

res.send({msg:"ok"})
})


router.get("/all",async(req,res)=>{
    console.log("api");
    
    const data= await pool.execute("select * from signup")

    res.status(200).send(data)
})


router.get("/allRegistered",async(req,res)=>{
    console.log("api");
    
    const data= await pool.execute("select * from register")

    res.status(200).send(data)
})



router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params);
    const id=req.params.id

    const data=await pool.execute(`delete from signup where id =?`,[id])

    console.log(data);

    res.status(204).send({del:"item deleted successfully"})
    
})


router.delete("/delete/registered/:id",async(req,res)=>{
    console.log(req.params);
    const id=req.params.id

    const data=await pool.execute(`delete from register where id =?`,[id])

    console.log(data);

    res.status(204).send({del:"item deleted successfully"})
    
})


router.get("/logout",(req,res)=>{
    res.clearCookie("Access")
    res.clearCookie("refresh")


    res.status(200).send({msg:"Logout"})
})



router.post("/register",uploads.single("ProfileImage"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
const body=req.body;

const hashP=await hashPassword(body.password,10)
const file=req.file
const Image=`http://localhost:8000/uploads/${file.filename}`
    const register=await pool.execute(`Insert into register(name,email,password,profile_image) values (?,?,?,?)`,[body.name,body.email,hashP,Image])

    res.send({msg:"ok"})
    
})




router.patch("/update",async(req,res)=>{
    console.log(req.body);

const body=req.body

const update = await pool.execute(
  `UPDATE register
   SET name = ?, email = ?
   WHERE id = ?`,
  [body.editForm.name, body.editForm.email, body.id]
);

console.log(update);


    res.send({msg:"ok"})
})

module.exports={router}