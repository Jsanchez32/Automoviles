import { endpoint1 } from "../controllers/clientes.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end1',endpoint1);



export default router;  
