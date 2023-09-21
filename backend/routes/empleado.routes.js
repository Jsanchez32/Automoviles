import { endpoint7 } from "../controllers/empleado.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end7',endpoint7);



export default router;  
