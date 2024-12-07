import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

mongoose.connect(process.env.DB_URL)
.then(()=>console.log("connected"))
.catch((err)=> console.error('failed to connect'))

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})