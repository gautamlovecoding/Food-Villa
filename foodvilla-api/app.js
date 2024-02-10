import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import cors from 'cors';
import route from "./routes/index.js";
dotenv.config();
const app = express();
import mongoose from "mongoose";

app.use(cors())

app.use(bodyParser.json());
app.use("/api", route);

app.use(function (req, res, next) {
	return res.status(404).json({
		success: false,
		message: "Page not found!"
	});
});


mongoose
  .connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log("mongodb running on 27017"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("server started on port " + 3000);
});
