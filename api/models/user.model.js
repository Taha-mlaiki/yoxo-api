const mongoose = require("mongoose");
const Joi = require("joi");

const userValidation = Joi.object({
  username: Joi.string().min(2).max(20).required(),
  email: Joi.string().min(2).max(30).required().email(),
  phone: Joi.string().min(10).max(10).required(),
});

const userSechma = new mongoose.Schema(
  {
    username: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSechma);

module.exports = {
  User,
  userValidation,
};
