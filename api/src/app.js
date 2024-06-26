const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require("cors")

const app = express();

app.use(morgan("dev"));
app.use(mainRouter);
app.use(cors());


module.exports = app;
