import conection from "../config/connection.js"

const endpoint5 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('Reserva');
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
        const coleccion = db.collection('Reserva');
        const response = await coleccion.aggregate([
            {$project:{"_id":0,"id_Reserva":1,"id_cliente":1}},
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

const addReserva = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('reserva');
        const data = req.body;
        const response = await coleccion.insertOne(data);
        res.json({
            response,
            data});
    } catch (error) {
        console.log(error);
    }
}

const updateReserva = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('reserva');
        const data = req.body;
        const id = parseInt(req.params.id);
        await coleccion.findOneAndUpdate({ id_Reserva: id }, { $set: data });
        res.send(data)
        } catch (error) {
        console.log(error);
    }
}

const deleteReserva = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('reserva');
        const id = parseInt(req.params.id);
        const response = await coleccion.deleteOne({id_Reserva: id})
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

const getReserva = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('reserva');
        const info = await coleccion.find().toArray();
        res.send(info);
    } catch (error) {
        console.log(error);
    }
}
export {
    endpoint5,
    endpoint15,
    addReserva,
    deleteReserva,
    updateReserva,
    getReserva
}
