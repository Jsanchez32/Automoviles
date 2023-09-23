import conection from "../config/connection.js"

const endpoint8 = async (req,res)=>{
    try {
        const db = await conection();;
        const coleccion = db.collection('sucursal');
        const response = await coleccion.aggregate([
            {$lookup:{
                from:"sucursalAutomovil",
                localField:"id_sucursal",
                foreignField: "id_Sucursal",
                as:"Automoviles"
            }}
        ]).toArray();
        res.send(response)
    } catch (error) {
        console.log(error);
    }
} 

const endpoint17 = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('sucursalAutomovil');
        const response = await coleccion.aggregate([
            {$lookup:{
                from:'sucursal',
                localField:'id_Sucursal',
                foreignField:'id_sucursal',
                as: 'Sucursal'
            }},
            {
                $unwind: "$Sucursal"
            },
            {$project:{
                _id: 0,
                id_Sucursal: 1, 
                Sucursal: {direccion: 1},
                cantidad_Disponible: 1, 
            }}
            ]).toArray();
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

const addSucursalAutomovil = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('sucursalAutomovil');
        const data = req.body;
        const response = await coleccion.insertOne(data);
        res.json({
            response,
            data});
    } catch (error) {
        console.log(error);
    }
}

const updateSucursalAutomovil = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('sucursalAutomovil');
        const data = req.body;
        const id = parseInt(req.params.id);
        await coleccion.findOneAndUpdate({ id_SucursalAutomovil: id }, { $set: data });
        res.send(data)
        } catch (error) {
        console.log(error);
    }
}

const deleteSucursalAutomovil = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('sucursalAutomovil');
        const id = parseInt(req.params.id);
        const response = await coleccion.deleteOne({id_SucursalAutomovil: id})
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

const getSucursalAutomovil = async (req,res)=>{
    try {
        const db = await conection();
        const coleccion = db.collection('sucursalAutomovil');
        const info = await coleccion.find().toArray();
        res.send(info);
    } catch (error) {
        console.log(error);
    }
}


export {
    endpoint8,
    endpoint17,
    addSucursalAutomovil,
    deleteSucursalAutomovil,
    updateSucursalAutomovil,
    getSucursalAutomovil
}