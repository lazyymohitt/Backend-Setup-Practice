import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
      index: true, // just wanted to create as optimiseable searchable
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      trim: true,
      required: true,
      index:true
    },
    avatar:{
        type:String, //Url will get from Cloudinary.
        required:true
    },
    coverImage:{
        type:String, // Url will get from Cloudinary
        required:true 
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
