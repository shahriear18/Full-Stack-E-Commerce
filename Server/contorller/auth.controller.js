const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/ApiResponce");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/AsyncHandler");
const sendEmail = require("../helpers/sendEmail");
const otpNumber = require("../helpers/otpGenerator");
const { validEmailCheker } = require("../helpers/validEmailCheker");
var jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res, next) => {
  try {
    const { fullname, email, password, phone, role, photo, address } = req.body;
    // hash password
    let emailcheker = validEmailCheker(email, res);
    if (!emailcheker) {
      apiResponse(res, 400, " Invalid email ");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    let otp = otpNumber();
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
    await sendEmail(email, fullname, otp);
    apiResponse(res, 201, "User Created Successfully", user);
  } catch (error) {
    next(error); // 🔥 globalErrorHandler এ পাঠাচ্ছে
  }
});
const login = asyncHandler(async (req, res, next) => {
  let { email, password } = req.body;
  let emailcheker = validEmailCheker(email, res);
  if (!emailcheker) {
    apiResponse(res, 400, " Invalid email ");
  }
  let existinguser = await userModel.findOne({ email });
  if (!existinguser) {
    apiResponse(res, 404, "something went wrong");
  } else {
    bcrypt.compare(password, existinguser.password, function (err, result) {
      if (err) {
        apiResponse(res, 404, "something went wrong");
      } else {
        if (!result) {
          apiResponse(res, 404, "something went wrong");
        } else {
          let user = {
            _id: existinguser._id,
            fullname: existinguser.fullname,
            email: existinguser.email,
            role: existinguser.role,
          };
          let token = jwt.sign({  user }, "shhhhh");
          console.log(token)

          apiResponse(res, 200, "User Login Successfully", {...user,token});
        }
      }
    });
  }
});

module.exports = register;
module.exports = login;
