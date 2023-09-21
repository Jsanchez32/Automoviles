import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.DATABASE)
const dbName = "alquilerAutomoviles"

const conectionDB = async ()=>{
    await client.connect();
    const db = client.db(dbName);
    return db
}


export default conectionDB