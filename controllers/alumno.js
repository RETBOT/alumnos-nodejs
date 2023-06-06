const Alumno = require("../models/alumno");

// Ver todos los alumnos
async function getAlumnos(req, res) {
    res.status(200).send(await Alumno.find());
}

// crear  
async function createAlumno(req, res) {
    const alumno = new Alumno({ ...req.body });
    alumno.save((error, alumnoStored) => {
        if (error) res.status(400).send({ msg: "Erro al crear el alumno" });
        else res.status(200).send(alumnoStored);
    })
}

// Actualizar
async function updateAlumno(req, res) {
    const { id } = req.params;
    const aluData = req.body;

    Alumno.findByIdAndUpdate({ _id: id }, aluData, (error) => {
        if (error) res.status(400).send({ msg: "Error al actualizar el alumno" });
        else res.status(200).send({ msg: "Actualización correcta" });
    });
}

// Eliminar  
async function deletAlumno(req, res) {
    const { id } = req.params;
    Alumno.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al eliminar el alumno" });
        } else {
            res.status(200).send({ msg: "Alumno eliminado" });
        }
    })
}

module.exports = {
    getAlumnos,
    createAlumno,
    updateAlumno,
    deletAlumno
}