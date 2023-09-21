import { endpoint8 } from "../controllers/sucursal.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end8',endpoint8);



export default router;  
