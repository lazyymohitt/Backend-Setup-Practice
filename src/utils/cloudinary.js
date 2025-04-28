import {v2 as  cloudinary } from 'cloudinary';

import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

const uploadOnCloudinary = async(localFilePath)=>{
        try {
            if(!localFilePath) return null

            // now start uploading file 
           const response  = await  cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
             })
            // file has been succesfully uploaded 

            console.log("file has been Uploaded",response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath)// remove locally save  te,porary file as the upload operation got failed
            return null
            
        }
}


export {uploadOnCloudinary}