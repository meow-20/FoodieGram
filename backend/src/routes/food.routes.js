const express = require("express");
const router = express.Router();
const multer = require("multer");
const { authFoodPartner } = require("../middlewares/auth.middleware");
const { createFood } = require("../controllers/food.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", authFoodPartner, upload.single("video"), createFood);

module.exports = router;
