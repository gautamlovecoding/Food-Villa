import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, default: null },
    address: { type: String, default: null },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
