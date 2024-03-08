const { Router } = require("express");

const { createProductHandler, getProductsHandler, getProductHandler} = require("../handlers/productsHandlers");

const productsRouter = Router();

productsRouter.get("/", getProductHandler);

productsRouter.get("/:id", getProductsHandler);

productsRouter.post("/", createProductHandler);

module.exports = productsRouter;