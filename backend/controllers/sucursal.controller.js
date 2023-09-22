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

export {
    endpoint8,
    endpoint17
}