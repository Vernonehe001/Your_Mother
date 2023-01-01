import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import productRouter from "./routes/productRouter.js";
import cors from "cors"

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }
)
.then(()=> console.log("Database Connected Successfully....!!!"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/products",productRouter)

app.get(
    "/",
    (req,res)=>{
        res.send("Backend API Running Successfully.....!!!")
    }
)

app.listen(
   port,
    ()=>{
        console.log(
            `Server connected at port ${port}`
        )
    }
)
