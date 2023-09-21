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

export {
    endpoint8
}