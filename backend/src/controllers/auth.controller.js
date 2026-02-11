const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User successfully created!",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    res.status(401).json({
      message: "Invalid Email or Password.",
    });
  }

  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    res.status(400).json({
      message: "Invalid Password.",
    });
  }

  const token = jwt.sign(
    {
      user: {
        _id: user._id,
      },
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully."
    })
}
module.exports = { registerUser, loginUser, logoutUser };
