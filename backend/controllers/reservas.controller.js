import conection from "../config/connection.js"

const endpoint5 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('alquiler');
        const response = await coleccion.aggregate([
            {$match: {estado:'Pendiente'}},
            {$lookup:{
                from: 'cliente',
                localField: 'id_cliente',
                foreignField: 'id_Cliente',
                as: 'Cliente'
            }},
            {$lookup:{
                from: 'automovil',
                localField: 'id_automovil',
                foreignField: 'id_automovil',
                as: 'Automovil'
            }}
    ]).toArray()
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint15 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('alquiler');
        const response = await coleccion.aggregate([
            {$project:{"_id":0,"id_alquiler":1,"id_cliente":1}},
            {$lookup:{
                from:"cliente",
                localField:"id_cliente",
                foreignField:'id_Cliente',
                as:"Cliente"
            }}
        ]).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}
export {
    endpoint5,
    endpoint15
}
