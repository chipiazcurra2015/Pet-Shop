const { Router } = require("express");
const authControllers = require("../controllers/authControlers")

const loginRouter = Router();

loginRouter.post("/auth/new-user", authControllers.newUser);
loginRouter.post("/auth/log-user", authControllers.logUser);

module.exports = loginRouter;