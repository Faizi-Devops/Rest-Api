import mongoose from "mongoose";

const TodoShema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   classname:{
    type:String,
    required:true,
    trim:true
   },
   age:{
    type:Number,
    required:true,
    
   },
   year:{
    type:Number,
    required:true
   }
})

const TodoModel = mongoose.model("todo",TodoShema);

export default TodoModel;