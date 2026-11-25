import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dns from 'dns'





dns.setServers(["8.8.8.8"])


 const app = express();
// to convert json data  to og from
app.use(express.json())
app.use(cors({origin: "http://localhost:5173", credentials:true}))

//to access cookies
app.use(cookieParser())


//  to access env variable
 dotenv.config()

//establishing mongo coonection
connectDB()

// register routes
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes)

 app.listen(5000, ()=>{
    console.log("server is listening on port 5000");
    
 } )