const { Router } = require("express");
const productsRouter = require("./productsRouter");
const loginRouter = require("./loginRouter");

const mainRouter = Router();

mainRouter.use("/login", loginRouter);
mainRouter.use("/products", productsRouter);

module.exports = mainRouter;
