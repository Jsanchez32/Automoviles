import conection from "../config/connection.js"


const endpoint11 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('automovil');
        const response = await coleccion.find({capacidad:{$gt:5}}).toArray();
        res.send(response)
    } catch (error) {
        console.log(error);
    }
} 

const endpoint16 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('automovil');
        const response = await coleccion.find().sort({marca:1,modelo:1}).toArray();
        res.send(response)
    } catch (error) {
        console.log(error);
    }
} 

export{
    endpoint11,
    endpoint16
}