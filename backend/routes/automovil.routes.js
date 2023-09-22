import { endpoint11,endpoint16, endpoint19 } from "../controllers/automovil.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end11',endpoint11);
router.get('/end16',endpoint16);
router.get('/end19',endpoint19);



export default router;  
