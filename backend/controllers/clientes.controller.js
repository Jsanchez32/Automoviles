import conection from "../config/connection.js"

const endpoint2 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('cliente');
        const response = await coleccion.find().toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint10 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const response = await coleccion.find({dni:'87654321B'}).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint13 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const response = await coleccion.aggregate([
            {$match:{id_Cliente:1}},
            {$lookup:{
                from:"reserva",
                localField:"id_Cliente",
                foreignField:"id_Cliente",
                as: "reserva"
            }},
            {$match:{"reserva.estado":'Pendiente'}}
        ]).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


export {
    endpoint2,
    endpoint10,
    endpoint13
}