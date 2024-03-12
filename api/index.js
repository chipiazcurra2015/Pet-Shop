const app = require("./src/app");
const express = require("express");
const mysql = require ("mysql")

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"pet-shop"
}) 

app.listen(3001, () => {
    console.log("listening on port 3001");
});

