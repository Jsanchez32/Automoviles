import { endpoint2,endpoint3,endpoint6 ,endpoint9,endpoint12} from "../controllers/alquiler.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end2',endpoint2);
router.get('/end3',endpoint3);
router.get('/end6',endpoint6);
router.get('/end9',endpoint9);
router.get('/end12',endpoint12);



export default router;  
