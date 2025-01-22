import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        
    },
    password:{
        required:true,
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    role:{
        type: String,
        enum:['user','admin'],
        default:'user'
    },
    task:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Task'
    }]
},
{
    timestamps: true,
  }
)
const  User=mongoose.model('User',userSchema)
export default User;