import express from 'express';
import { trycatch } from '../middlewares/tryCatch';
import checkAuth from '../middlewares/checkAuth';
import { checkAdmin } from '../middlewares/checkAdmin';
import { getAllTask, getAllUsers } from '../controllers/admin/adminController';


const router=express.Router();
router.get(`/admin/users`,checkAuth,checkAdmin,trycatch(getAllUsers))
router.get(`/admin/tasks`,checkAuth,checkAdmin,trycatch(getAllTask))

export default router;