import express from "express";
import { getAllUser } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup")

export default router;
