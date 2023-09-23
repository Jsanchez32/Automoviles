import { endpoint8,endpoint17,addSucursalAutomovil,deleteSucursalAutomovil,getSucursalAutomovil,updateSucursalAutomovil } from "../controllers/sucursal.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end8',endpoint8);
router.get('/end17',endpoint17);
router.get('/add',addSucursalAutomovil);
router.get('/upd/:id',updateSucursalAutomovil);
router.get('/del/:id',deleteSucursalAutomovil);
router.get('/get',getSucursalAutomovil);



export default router;  
