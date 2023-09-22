import { endpoint5,endpoint15 } from "../controllers/reservas.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end5',endpoint5);
router.get('/end15',endpoint15);



export default router;  
