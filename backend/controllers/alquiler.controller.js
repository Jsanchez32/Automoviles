import conection from "../config/connection.js"

const endpoint2 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('alquiler');
        const response = await coleccion.aggregate([
            {$match: {$or:[{'estado':'Cancelado'},{'estado':'Pendiente'}]}},
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

const endpoint3 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('alquiler');
        const response = await coleccion.aggregate([
            {$match: {$or:[{'estado':'Confirmado'},{'estado':'Aprobado'}]}},
            {$lookup:{
                from: 'cliente',
                localField: 'id_cliente',
                foreignField: 'id_Cliente',
                as: 'Cliente'
            }}
    ]).toArray()
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint6 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('alquiler');
        const response = await coleccion.find({id_alquiler:2}).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


export {
    endpoint2,
    endpoint3,
    endpoint6
}