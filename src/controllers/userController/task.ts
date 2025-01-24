import { Request, Response } from "express";
import User from "../../models/userSchema";
import Task from "../../models/taskSchema";
import AppError from "../../middlewares/AppError";

export const addTask = async (req: Request, res: Response) => {
    const userId = req.params.id; 
    const { title, description } = req.body;

    const newTask = await Task.create({
      title,
      description,
    });

    const user = await User.findById(userId);

    if (!user) {
      throw new AppError(`user does not exist`,404)
    }

    user.task.push(newTask._id);
    await user.save();

    res.status(201).json({
      message: "Task added successfully",
      task: newTask,
    });
  
};
export const getAllTask = async (req: Request, res: Response) => {
    const userId = req.params.id; 
    

    const user=await User.findById(userId).populate('task')
    if (!user) {
      throw new AppError(`user does not exist`,404)
    }
   if(!user.task){
    throw new AppError(`no task found`,404)
   }

    res.status(201).json({
      message: "Task added successfully",
      task: user.task,
    });
  
};

