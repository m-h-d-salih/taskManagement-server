import express from 'express';
import { createValidator } from 'express-joi-validation'
import { trycatch } from '../middlewares/tryCatch';
import { signup } from '../controllers/authController/authController';
import { regitserValidation } from '../middlewares/validation/auth';


const router=express.Router();
const validator=createValidator({passError:true})

router.post('/signup',validator.body(regitserValidation),trycatch(signup))

export default router;