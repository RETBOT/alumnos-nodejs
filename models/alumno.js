const mongoose = require("mongoose");

const AlumnoSchema = mongoose.Schema({
    id: Number,
    nombre: String,
    apellido: String,
    especialidad: String,
    promedio: Number,
});

module.exports = mongoose.model("Alumno", AlumnoSchema);