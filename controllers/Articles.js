const test = (req, res) =>{
    return res.status(200).json({"mensaje":"Soy una accion de prueba en mi controlador"})
}

const save= (req, res) => {
    return res.status(200).json({
        mensaje: "Guardado exitoso"
    })
}

module.exports={test,save}