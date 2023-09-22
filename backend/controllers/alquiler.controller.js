import conection from "../config/connection.js"

const endpoint3 = async (req,res)=>{
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

const endpoint4 = async (req,res)=>{
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

const endpoint9 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('alquiler');
        const response = await coleccion.aggregate([
            {$project:{"id_alquiler":1,"costo_Total":1,"_id":0}},
            {$match:{id_alquiler:1}}
        ]).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint12 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('alquiler');
        const response = await coleccion.find({fecha_Inicio:'2023-07-05'}).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const endpoint18 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('alquiler');
        const response = await coleccion.find().toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


export {
    endpoint3,
    endpoint4,
    endpoint6,
    endpoint9,
    endpoint12,
    endpoint18
}