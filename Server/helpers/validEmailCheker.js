// const { apiResponse } = require("../utils/ApiResponce");

exports.validEmailCheker = (email, res) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  // apiResponse(res, 400, "Invalid Email");
};
