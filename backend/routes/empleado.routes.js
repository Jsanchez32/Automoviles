import { endpoint7,endpoint14 } from "../controllers/empleado.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end7',endpoint7);
router.get('/end14',endpoint14);



export default router;  
