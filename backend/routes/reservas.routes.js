import { endpoint5,endpoint15,addReserva,deleteReserva,getReserva,updateReserva } from "../controllers/reservas.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end5',endpoint5);
router.get('/end15',endpoint15);
router.get('/add',addReserva);
router.get('/del/:id',deleteReserva);
router.get('/upd/:id',updateReserva);
router.get('/get',getReserva);



export default router;  
