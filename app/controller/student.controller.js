const db = require("../models");
const Student = db.student;


exports.create = (req, res) => {
    if (!req.body.numdocument) {
        res.status(400).send({ message: "No se puede agregar estudiante, revise los campos" });
        return;
    }

    if (!req.body.name) {
        res.status(400).send({ message: "No se puede agregar estudiante, revise los campos" });
        return;
    }
    if (!req.body.lastname) {
        res.status(400).send({ message: "No se puede agregar estudiante, revise los campos" });
        return;
    }
    if (!req.body.age) {
        res.status(400).send({ message: "No se puede agregar estudiante, revise los campos" });
        return;
    }
    if (!req.body.note) {
        res.status(400).send({ message: "No se puede agregar estudiante, revise los campos" });
        return;
    }
    const student = new Student({
        numdocument: req.body.numdocument,
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        note: req.body.note
    });
    student
        .save(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error al almacenar un estudiante"
            });
        });
};

exports.findAll = (req, res) => {
    const numdocument = req.query.numdocument;
    var condicion = numdocument ? { numdocument: { $regex: new RegExp(numdocument), $options: "i" } } : {};

    Student.find(condicion).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error al buscar estudiante"
        });
    });

};

exports.findOne = (req, res) => {
    const numdocument = req.params.numdocument;


    Student.find({ numdocument: numdocument }).then(data => {
        if (!data) {
            res.status(404).send({ message: "No existe un estudiante con el id" + numdocument });
        } else res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error trayendo al estudiante =" + numdocument
        })
    })

};

exports.deleteOne = (req, res) => {

    const numdocument = req.params.numdocument;

    Student.deleteOne({ numdocument: numdocument }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `no se pudo eliminar el studiante ${numdocument}. Es posible que no se encontrara el estudiente.`
            })
        } else {
            res.send({
                message: "El estudiante fue elimado de manera exitosa"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error al eliminar estudiante"
        })
    });
};

exports.deleteAll = (req, res) => {
    Student.deleteMany({}).then(data => {
        res.send({
            message: `${data.deletedCount} Estudiantes eliminados satisfactoriamente`
        })
    }).catch(err => {
        res.status(500).send({
            message: "Los estudiantes no se pudieron eliminar"
        });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los datos no se pudieron actualizar!"
        });
    }

    Student.updateOne({ numdocument: req.params.numdocument }, { $set: req.body }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se pudo actualizar el estudiante con numero de documento =${numdocument}. Por favor verifique y vuelva a realizar la acción!`
                });
            } else res.send({ message: "Estudiante actualizado satisfactoriamente" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar estudiante con numero de documento " + numdocument
            });
        });
};

exports.average = (req, res) => {
    const numdocument = req.query.numdocument;
    var condicion = numdocument ? { numdocument: { $regex: new RegExp(numdocument), $options: "i" } } : {};
    var average = 0;

    Student.find(condicion).then(data => {
        for (let index = 0; index < data.length; index++) {
            var note = data[index].note;
            average = average + note;
        }

        average = average / data.length;
        res.send({
            message: `El promedio de nota de los estudiantes es ${average}`
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error al calcular el promedio"
        });
    });
}

exports.updateByAge = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los datos no se pudieron actualizar"
        });
    }

    //El orden del query es primero lo que se va a buscar, después el $set : campos a modificar.
    Student.updateMany({ age: req.params.age }, { $set: req.body }, { useFindAndModify: false }).then(data => {
            if (!data) {
                res.status(404).send({
                    message: "No se pueden modificar los estudiantes"
                });
            } else res.send({ message: "Estudiantes modificados satisfactoriamente" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando los estudiantes"
            });
        });
};