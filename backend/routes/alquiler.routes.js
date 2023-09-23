import { endpoint3,endpoint4,endpoint6 ,endpoint9,endpoint12,endpoint18,addAlquiler,updateAlquiler,deleteAlquiler,getAlquiler} from "../controllers/alquiler.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end3',endpoint3);
router.get('/end4',endpoint4);
router.get('/end6',endpoint6);
router.get('/end9',endpoint9);
router.get('/end12',endpoint12);
router.get('/end18',endpoint18);
router.get('/add',addAlquiler);
router.get('/upd/:id',updateAlquiler);
router.get('/del/:id',deleteAlquiler);
router.get('/get',getAlquiler);



export default router;  
