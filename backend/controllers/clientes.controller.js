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

const addCliente = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const data = req.body;
        const response = await coleccion.insertOne(data);
        res.json({
            response,
            data});
    } catch (error) {
        console.log(error);
    }
}

const updateCliente = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const data = req.body;
        const id = parseInt(req.params.id);
        await coleccion.findOneAndUpdate({ id_Cliente: id }, { $set: data });
        res.send(data)
        } catch (error) {
        console.log(error);
    }
}

const deleteCliente = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const id = parseInt(req.params.id);
        const response = await coleccion.deleteOne({id_Cliente: id})
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

const getCliente = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('cliente');
        const info = await coleccion.find().toArray();
        res.send(info);
    } catch (error) {
        console.log(error);
    }
}

export {
    endpoint2,
    endpoint10,
    endpoint13,
    addCliente,
    deleteCliente,
    updateCliente,
    getCliente
}