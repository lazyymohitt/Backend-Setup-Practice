import mongoose , {Schema} from "mongoose";



const videoSchema  = new Schema({
    videoFile:{
        type:string , // get from Cloudinary
        required:true
    },
    thumbnail:{
        type:String,  // get form cloudinaryy
        required:true    
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    duration:{
        type:Number, // you will get it form Cloudinary
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type: Schema.mongoose.Types.ObjectId,
        ref:"User "
    }    

},{
    timestamps:true
})


export  const Video  = mongoose.model("Video", videoSchema) 