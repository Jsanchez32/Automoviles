import conection from "../config/connection.js"

const endpoint4 = async (req,res)=>{
    try {
        const db = await conection();;
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

export {
    endpoint4
}
