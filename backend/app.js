import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
    .connect(
        "mongodb+srv://jaeven:donut@cluster0.fnbx45f.mongodb.net/WaitAMinute=true&w=majority"
)
.then(() => app.listen(3002))
.then(() => 
    console.log("Connected TO Database and Listening TO Local Host 3000")
)
.catch((err) => console.log(err));

mongoose.set('strictQuery', false);