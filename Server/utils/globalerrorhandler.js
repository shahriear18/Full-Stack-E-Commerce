const { apiResponse } = require("./ApiResponce");

exports.globalErrorHandler = (err, req, res, next) => {
  // MongoDB duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    apiResponse(res, 404, `${field} already in use`);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    let errors = {};

    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });
    apiResponse(res, 404, errors);
  }

  // Default error
  return apiResponse(res, 500, err.message || "Something went wrong");
};
