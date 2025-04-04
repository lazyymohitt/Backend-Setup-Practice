const asynchandler = (requesthandler) =>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}






// const asynchandler = (funcs)=> async(req,res,next)=>{
// try {
//     await funcs(req,res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         success:false,
//         message:error.message
//     })
// }
// }


export {asynchandler}