import express from "express";
const router = express.Router();
import user from './user.js'
import Auth from '../Auth/index.js'

//user Route
router.use("/user", user);

//Auth
router.use("/auth", Auth);

export default router;
