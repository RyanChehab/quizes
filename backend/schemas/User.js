import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
      },
    points: {
        type: Number,
        default: 0,
    },
});

userSchema.methods.generateJWT = function () {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );
  };
  

const User = mongoose.model('User', userSchema);
export default User;