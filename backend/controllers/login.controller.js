import {response} from "express";
import { generateJWT } from "../helpers/generateJWT.js";
import conection from "../config/connection.js"


const login = async (req, res=response)=>{
    const {email,password} = req.body;
    try {
        //Verificar email//
        const db = await conection();
        const coleccion = db.collection('usuario');
        const usuario = await coleccion.findOne({email});
        if(!usuario){
            return res.status(400).json({
                msg: "El email es incorrecto",
        })
        }
        
        //Verificar contraseña//
        const validatePsw = (usuario.password);
        if(validatePsw!==password){
            res.status(404).json({
                msg: "Contraseña incorrecta"
            })
        }

        const token = await generateJWT(usuario.id)

        res.json({
            usuario,
            success:true,
            token
        })  

    } catch (error) {
        console.log(error);
    }
}


const verifyLogin = async (req,res)=>{
    try {
        res.json({
            validToken: true
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    login,  
    verifyLogin
}