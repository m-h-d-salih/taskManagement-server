import mongoose from "mongoose"

const taskSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String,
        
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    status:{
        type: String,
        enum:['pending','progress','completed'],
        default:'pending'
    }
},
{
    timestamps: true,
  }
)
const  Task=mongoose.model('Task',taskSchema)
export default Task;