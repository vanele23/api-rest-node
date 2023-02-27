const mongoose= require("mongoose")
const connection= async()=>{
    try {
         await mongoose.connect("mongodb://localhost:27017/mi_blog")
         console.log("Se pudo conectar a la BBDD")
        //Parametos dentro del objeto
        //userNewUrlParser: true
        //useUnifiedTopolohy: true
        //useCreateIndex:true
    }
    catch (error)
    {
        console.log("Error ")
        throw new Error("No se ha podido establecer la conexion a la BBDD")
    }
}
module.exports={
    connection
}