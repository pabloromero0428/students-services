const student = require("../controller/student.controller");

module.exports = function(app) {

    var router = require("express").Router();

    //Agregar estudiante
    router.post("/", student.create);

    //Promedio de notas
    router.get("/average", student.average);

    //Ver todos los datos en base de datos
    router.get("/", student.findAll);

    //Ver un estudiante de la base de datos 
    router.get("/:numdocument", student.findOne);


    //Atualizar por edad
    router.put("/age/:age", student.updateByAge);

    //Actualizar estudiante
    router.put("/:numdocument", student.update)


    //Eliminar 1 estudiantes por numero de documeto
    router.delete("/:numdocument", student.deleteOne);

    //Eliminar todos los estudiantes de la base de datos
    router.delete("/", student.deleteAll);


    //Ruta predeterminada
    app.use('/api/students', router);

}