const {connection}=require("./database/connection");
const express= require("express");
const cors= require("cors")
console.log("App arrancando...")
connection()

//crear servidor node, express
const app= express();
const port=3900

//Configurar cors
app.use(cors());

//Leer y convertir body a objeto js

app.use(express.json());


//Rutas truely

const routeArticles= require("./routes/article")

//Se cargan las rutas

app.use("/api", routeArticles)

// Crear rutas

app.get("/prueba", (req, res) =>{
    console.log("Se ejecuta metodo /prueba");
    return res.status(200).json({"curso":"Master en NodeJs"})
})
app.get("/", (req, res) =>{
    console.log("Bienvenido");
    return res.status(200).send("<h1>Bienvenido!</h1>")
})


//Crear servido y escuchar peticiones http
app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto "+ port)
});