const foodModel = require("../models/food.model");
const { uploadFile } = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res) {
  try {
    const { name, description } = req.body;
    // console.log(req.foodPartner);    
    // console.log(req.body);
    // console.log(req.file);

    const uploadResult = await uploadFile(req.file.buffer, uuidv4());

    const foodItem = await foodModel.create({
        name,
        description,
        video: uploadResult.url,
        foodPartner: req.foodPartner._id,
    });
    res.status(201).json({ message: "Food item created successfully!", food: foodItem });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createFood,
};
