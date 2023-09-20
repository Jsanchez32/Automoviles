import { MongoClient } from "mongodb";
import express from "express";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT123;

        this.middlewares();

        this.rutas = {

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

    }
}


export default Server;