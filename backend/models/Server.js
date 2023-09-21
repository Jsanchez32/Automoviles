import { MongoClient } from "mongodb";
import express from "express";
import clienteRoutes from "../routes/clientes.routes.js";
import alquilerRoutes from "../routes/alquiler.routes.js";
import reservaRoutes from "../routes/reservas.routes.js";


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT123;

        this.middlewares();

        this.rutas = {
            clientes:'/api/clientes',
            alquiler:'/api/alquiler',
            reserva:'/api/reserva',
        }

        this.routes();
    }

    listener(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.rutas.clientes,clienteRoutes);
        this.app.use(this.rutas.alquiler,alquilerRoutes);
        this.app.use(this.rutas.reserva,reservaRoutes);
    }
}


export default Server;