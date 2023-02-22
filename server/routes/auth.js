import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

//Create a user
router.post("/signup", signup);

//Sign in
router.post("/signin", signin);

export default router;
