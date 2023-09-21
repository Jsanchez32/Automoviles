import conection from "../config/connection.js"

const endpoint1 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('cliente');
        const response = await coleccion.find().toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


export {
    endpoint1
}