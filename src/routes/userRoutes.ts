import express from 'express';
import { createValidator } from 'express-joi-validation'
import { trycatch } from '../middlewares/tryCatch';
import { login, signup } from '../controllers/auth/authController';
import { loginValidation, regitserValidation } from '../middlewares/validation/auth';
import { taskValidation } from '../middlewares/validation/taskValidation';
import { addTask, deleteAtask, getAllTask, updateAtask } from '../controllers/user/task';
import checkAuth from '../middlewares/checkAuth';


const router=express.Router();
const validator=createValidator({passError:true})

router.post('/signup',validator.body(regitserValidation),trycatch(signup))
router.post('/login',validator.body(loginValidation),trycatch(login))
router.route('/user/task/:id').post(checkAuth,validator.body(taskValidation),trycatch(addTask))
.get(checkAuth,trycatch(getAllTask))
router.route(`/user/:userId/task/:taskId`).put(checkAuth,trycatch(updateAtask))
.delete(checkAuth,trycatch(deleteAtask))

export default router;