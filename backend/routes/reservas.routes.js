import { endpoint4 } from "../controllers/reservas.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end4',endpoint4);



export default router;  
