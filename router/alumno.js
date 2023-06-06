const express = require("express");
const AluController = require("../controllers/alumno");

const api = express.Router();

// Todos los alumnos
api.get("/alumnos", AluController.getAlumnos);

// Crear 
api.post("/alumno", AluController.createAlumno);

// Actualizar 
api.patch("/alumno/:id", AluController.updateAlumno);

// Eliminar 
api.delete("/alumno/:id", AluController.deletAlumno);

module.exports = api;