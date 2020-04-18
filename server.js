const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conexion a base de datos exitosa");
    })
    .catch(err => {
        console.log("No se pudo establecer conexion con la base de datos", err);
        process.exit();
    });


// app.get("/", (req, res) => {
//     res.json({ message: "Bienvenido a la app students ingenieria web" });
// });

require("./app/routes/student.routes")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});