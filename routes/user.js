import express from "express";
import userModel from "../database/models/user.js";

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  const users = await userModel.find();

  if (users.length === 0) {
    return res.status(404).json("user not have");
  }
  res.status(200).json(users);
});

// create user
router.post("/create", async (req, res) => {
  const { name, age } = req.body;

  const checkUser = await userModel.findOne({ name });

  if (checkUser) {
    return res.json("user aleady exists");
  }

  try {
    const user = await userModel.create(req.body);
    res.status(201).json({ message: "user create success", user });
  } catch (e) {
    res.status(500).json(e.errors);
  }
});

export default router;
