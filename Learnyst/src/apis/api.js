import axios from "axios";
import { Navigate, replace, useNavigate } from "react-router";

export const createSignupUser=async(formData)=>{

console.log("form",formData);

try {
    const res=await axios.post("/user/signup",formData)

console.log("signup res",res)

return res

} catch (error) {
    console.log("api err",error);
    
}

};



export const handleLoginUser=async(formData)=>{

console.log("form",formData);

try {
    const res=await axios.post("/user/login",formData)

console.log("login res",res)

return res;

} catch (error) {
    console.log("api err",error);
    
}

}

