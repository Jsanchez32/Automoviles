import { endpoint4,endpoint15 } from "../controllers/reservas.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end4',endpoint4);
router.get('/end15',endpoint15);



export default router;  
