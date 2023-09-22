import { endpoint2,endpoint10,endpoint13 } from "../controllers/clientes.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end2',endpoint2);
router.get('/end10',endpoint10);
router.get('/end13',endpoint13);



export default router;  
