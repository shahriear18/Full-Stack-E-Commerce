const express = require("express");
const { globalErrorHandler } = require("../../../utils/globalerrorhandler");
const register = require("../../../contorller/auth.controller");
const login = require("../../../contorller/auth.controller");
const auth = express.Router();

auth.post("/registration", register);
auth.post("/login", login);

module.exports = auth;
