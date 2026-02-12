const express = require("express");
const router = express.Router();
const multer = require("multer");
const { authFoodPartner, authUser } = require("../middlewares/auth.middleware");
const { createFood, getFoodItems } = require("../controllers/food.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

// POST /api/food - Create a new food item (Protected)
router.post("/", authFoodPartner, upload.single("video"), createFood);

// GET /api/food - Get all food items (Public)
router.get("/", authUser, getFoodItems);

module.exports = router;
