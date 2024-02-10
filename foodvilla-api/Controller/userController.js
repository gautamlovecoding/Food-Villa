import UserModel from "../Model/user.js";
import moment from "moment";

export const createUser = async (req, res) => {
  try {
    const { userName, email, firstName, password } = req.body;
    if (!(userName && email && firstName && password)) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid request" });
    }
    let createUser = await UserModel.create(req.body);
    return res.status(201).send({
      timeStamp: moment().unix(),
      success: true,
      message: "User created successfully..",
      data: createUser,
    });
  } catch (error) {
    return res.status(500).send({
      timeStamp: moment().unix(),
      success: false,
      message: error.message,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    let getUser = await UserModel.find(
      {},
      { firstName: 1, lastName: 1, email: 1, address: 1 }
    );
    return res.status(200).send({
      timeStamp: moment().unix(),
      success: true,
      message: "Fetched Successfully..",
      data: getUser,
    });
  } catch (error) {
    return res.status(500).send({
      timeStamp: moment().unix(),
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send({
        timeStamp: moment().unix(),
        success: false,
        message: "Invalid request",
      });
    }
    await UserModel.updateOne(
      { email: req.body.email },
      {
        ...req.body,
        updatedAt: Date.now(),
      }
    );
    return res.status(200).send({
      timeStamp: moment().unix(),
      success: true,
      message: "updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
