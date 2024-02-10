import express from "express";
const router = express.Router();
import { createUser, getAllUser, updateUser } from "../Controller/userController.js";

router.post("/create", createUser);
router.get("/getAll", getAllUser);
router.put("/update", updateUser);



export default router;