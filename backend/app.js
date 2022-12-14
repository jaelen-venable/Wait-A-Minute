import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();


app.use("/api/user", router);
mongoose
    .connect(
        "mongodb+srv://jaeven:donut@cluster0.fnbx45f.mongodb.net/WaitAMinute=true&w=majority"
)
.then(() => app.listen(3000))
.then(() => 
    console.log("Connected TO Database and Listening TO Local Host 3000")
)
.catch((err) => console.log(err));

mongoose.set('strictQuery', false);