import express from "express";
const router = express.Router();
import { login } from "./login.js";

router.post("/login", login);

export default router;
