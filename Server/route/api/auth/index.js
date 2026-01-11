const express = require("express");
const { globalErrorHandler } = require("../../../utils/globalerrorhandler");
const register = require("../../../contorller/auth.controller");
const auth = express.Router();

auth.post("/registration", register);

module.exports = auth;
