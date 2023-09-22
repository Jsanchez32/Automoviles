import { endpoint11,endpoint16 } from "../controllers/automovil.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end11',endpoint11);
router.get('/end16',endpoint16);



export default router;  
