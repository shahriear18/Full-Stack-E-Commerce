const express = require("express");
const auth = require("./auth");
const SecendRouter = express.Router();

SecendRouter.use("/auth", auth,)

module.exports = SecendRouter;
