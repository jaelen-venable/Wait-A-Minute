import express from "express";
import { addComment, deleteComment, } from "../controllers/comment-controller";
const commentRouter = express.Router();


blogRouter.post("/add", addComment);
blogRouter.delete("/:id", deleteComment);



export default commentRouter;