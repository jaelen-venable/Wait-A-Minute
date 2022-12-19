import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
    .connect(
        "mongodb+srv://jaeven:donut@cluster0.fnbx45f.mongodb.net/WaitAMinute=true&w=majority"
)
.then(() => app.listen(3000))
.then(() => 
    console.log("Connected TO Database and Listening TO Local Host 3000")
)
.catch((err) => console.log(err));

mongoose.set('strictQuery', true);