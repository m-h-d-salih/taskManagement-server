import { Request, Response } from "express";
import AppError from "../../middlewares/AppError";
import User from "../../models/userSchema";
import Task from "../../models/taskSchema";

export const getAllUsers = async (req: Request, res: Response) => {
    const users=await User.find().populate('task');
    if (!users) {
        throw new AppError('no users found',404)
    }

    res.status(201).json({
        message: "get all task successfully",
        data: users,
        success:true
      });
};
export const getAllTask = async (req: Request, res: Response) => {
    const task=await Task.find()
    if (!task) {
        throw new AppError('no task found',404)
    }

    res.status(201).json({
        message: "get all task successfully",
        data: task,
        success:true
      });
};