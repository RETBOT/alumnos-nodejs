const express = require("express");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Import routings
const aluRoutes = require("./router/alumno");

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Reader HTTP - CORS
app.use(cors());

// Configure routings
app.use(`/api/${API_VERSION}`, aluRoutes);

module.exports = app;