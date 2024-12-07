import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes.js '
dotenv.config()

const app = express();

// in order to acces the body 
app.use(express.json());

// connection to db
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("connected"))
.catch((err)=> console.error('failed to connect'))

app.use('/api/users', userRoutes)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})