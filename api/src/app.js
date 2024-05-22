const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require("cors");
//const nodemailer = require ("./routes/nodemailer.js")

const app = express();

app.use(morgan("dev"));
//app.use("/nodemailer",nodemailer);

app.use(express.json());
// Middleware cors, permite que cualquier cliente se conecte
app.use(cors());

app.use(mainRouter);

module.exports = app;
