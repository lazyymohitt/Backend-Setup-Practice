import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
      index: true, //just wanted to create as optimiseable searchable
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
      index: true,
    },
    //Minor changes done
    avatar: {
      type: String, //Url will get from Cloudinary.
      required: true,
    },
    coverImage: {
      type: String, // Url will get from Cloudinary
      required: true,
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password: {
      type: String,
      required: [true, "password Must Be Entered"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password);
  next;
});

// just comparing the user passsword with the encrrypted password by the bcrypt

userSchema.methods.ispasswordCorrect  = async function(password)
{
 return await bcrypt.compare(password,this.password)
}

//creating the function to generate the accestoken h{ere
userSchema.methods.generateAccessToken = function (){
  return jwt.sign(
    {
      id:this._id,
      email:this.email,
      username:this.username,
      fullname:thiws.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
//creating the function to generate the refreshtoken here
userSchema.methods.generateRefreshToken = function (){
  return jwt.sign(
    {
      id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model("User", userSchema);
