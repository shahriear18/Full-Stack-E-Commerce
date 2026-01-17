const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/ApiResponce");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/AsyncHandler");
const sendEmail = require("../helpers/sendEmail");
const otpNumber = require("../helpers/otpGenerator");

const register = asyncHandler(async (req, res, next) => {
  try {
    const { fullname, email, password, phone, role, photo, address } = req.body;
    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    let otp = otpNumber()
    const user = await userModel.create({
      fullname,
      email,
      password: hashedPassword,
      phone,
      role,
      photo,
      address,
      otp,
    });
    await  sendEmail(email,fullname,otp);
    apiResponse(res, 201, "User Created Successfully", user);
  } catch (error) {
    next(error); // 🔥 globalErrorHandler এ পাঠাচ্ছে
  }
});

module.exports = register;
