const foodModel = require("../models/food.model");
const { uploadFile } = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res) {
  try {
    // console.log("Body:", req.body);
    // console.log("File:", req.file);

    const name = req.body?.name;
    const description = req.body?.description;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const uploadResult = await uploadFile(req.file.buffer, uuidv4());

    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: uploadResult.url,
      foodPartner: req.foodPartner._id,
    });

    res.status(201).json({ message: "Food item success", food: foodItem });
  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({ message: error.message, stack: error.stack });
  }
}



module.exports = {
  createFood,
};
