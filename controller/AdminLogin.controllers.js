import { AdminModel } from "../modles/AdminModel.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res
        .status(404)
        .json({ isSuccess: false, message: "Admin not found" });
    }
    const isMatch = await bcryptjs.compare(password, admin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .status(200)
      .json({ isSuccess: true, message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ isSuccess: false, message: error.message, error });
  }
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ isSuccess: false, message: "Please provide email and password" });
  }

  const existingUser = await AdminModel.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ isSuccess: false, message: "User already exists" });
  }

  const salt = await bcryptjs.genSalt(10);
  const Encryptedpassword = await bcryptjs.hash(password, salt);
  try {
    const admin = await AdminModel.insertOne({
      email,
      password: Encryptedpassword,
    });
    if (!admin) {
      res
        .status(200)
        .json({ isSuccess: false, message: "Failed to create an user" });
    }
    res
      .status(200)
      .json({ isSuccess: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ isSuccess: false, message: error.message, error });
  }
};

const updatePassword = async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcryptjs.genSalt(10);
  const Encryptedpassword = await bcryptjs.hash(password, salt);
  try {
    const admin = await AdminModel.updateOne({
      email,
      password: Encryptedpassword,
    });
    res
      .status(200)
      .json({ isSuccess: true, message: "Password Updated successfully" });
  } catch (error) {
    res.status(500).json({ isSuccess: false, message: error.message, error });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const {id} = req.userId;

    const user = await AdminModel.findById(id).select("-password");

   return res
      .status(200)
      .json({ isSuccess: true, message: "User Fetched Successfully", user });
  } catch (error) {
   return res.status(500).json({ isSuccess: false, message: error.message, error });
  }
};

export { adminLogin, createUser, updatePassword, getCurrentUser };
