import conection from "../config/connection.js"

const endpoint7 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('empleado');
        const response = await coleccion.find({cargo:'Vendedor'}).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint14 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('empleado');
        const response = await coleccion.find({$or:[{cargo:'Gerente'},{cargo:'Asistente'}]}).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

export {
    endpoint7,
    endpoint14
}