import mongoose from "mongoose";

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
    points: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model('User', userSchema);
export default User;