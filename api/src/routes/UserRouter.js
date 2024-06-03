const { Router } = require("express");
 const {loginUserHandler,
        createUserHandler,
        getAllUserHandler,
        getUserIDHandler,
        putUserHandler,
        deleteUserHandler} = require("../handlers/UserHandler");

const userRouter = Router();

//userRouter.post("/log", loginUserHandler)

userRouter.route("/")
.post(createUserHandler)
.get(getAllUserHandler)

userRouter.route("/:id")
.get(getUserIDHandler)
.put(putUserHandler)
.delete(deleteUserHandler)

userRouter.route("/log")
.post(loginUserHandler)

module.exports = userRouter;