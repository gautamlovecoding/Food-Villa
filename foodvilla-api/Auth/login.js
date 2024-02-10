import moment from "moment";
import UserModel from "../Model/user.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!(email && password)) {
      return res.status(400).send({
        timeStamp: moment().unix(),
        success: false,
        message: "email/password is required!",
      });
    }
    const getUser = await UserModel.findOne({ email, password });
    if (!getUser) {
      return res.status(400).send({
        timeStamp: moment().unix(),
        success: false,
        message: "Invalid Credentials!",
      });
    }

    //createToken...
    const payload = {
      email,
      firstname: getUser?.firstName,
      password: getUser?.password,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TOKEN_EXPIRY,
    });
    return res.status(200).send({
      timeStamp: moment().unix(),
      success: true,
      token,
      message: "LoggedIn successfully...",
    });
  } catch (error) {
    return res.status(500).send({
      timeStamp: moment().unix(),
      success: false,
      message: error.message,
    });
  }
};
