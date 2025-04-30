import { asynchandler } from "../utils/asynchandler";


const registerUser = asynchandler(async(req,res)=>{

 await res.status(200).json({
    message:"okk"
})
})



export {registerUser}