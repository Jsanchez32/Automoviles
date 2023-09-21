import { endpoint2,endpoint3,endpoint6 } from "../controllers/alquiler.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end2',endpoint2);
router.get('/end3',endpoint3);
router.get('/end6',endpoint6);



export default router;  
