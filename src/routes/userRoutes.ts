import express from 'express';
import { createValidator } from 'express-joi-validation'
import { trycatch } from '../middlewares/tryCatch';
import { login, signup } from '../controllers/authController/authController';
import { loginValidation, regitserValidation } from '../middlewares/validation/auth';


const router=express.Router();
const validator=createValidator({passError:true})

router.post('/signup',validator.body(regitserValidation),trycatch(signup))
router.post('/login',validator.body(loginValidation),trycatch(login))

export default router;