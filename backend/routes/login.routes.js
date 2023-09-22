import {login} from "../controllers/login.controller.js";
import {Router} from "express";

const router = Router();

router.get('/end20',login);

export default router;  
