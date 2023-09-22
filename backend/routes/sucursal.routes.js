import { endpoint8,endpoint17 } from "../controllers/sucursal.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end8',endpoint8);
router.get('/end17',endpoint17);



export default router;  
