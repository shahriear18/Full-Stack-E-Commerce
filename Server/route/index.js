const express = require("express");
const SecendRouter = require("./api");
const FirstRouter = express.Router();

FirstRouter.use("/api", SecendRouter,)

module.exports = FirstRouter;
