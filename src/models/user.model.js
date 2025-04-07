import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
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
    ,password:{
      type:String,
      required:[true,"password Must Be Entered"]
    },
    refreshToken:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) return  next();
  this.password = bcrypt.hash(this.password)
  next
})


export const User = mongoose.model("User", userSchema);
