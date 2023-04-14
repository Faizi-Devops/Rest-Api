import TodoModel from "../models/Todo.js"

const AddTodo = async(req,res)=>{
    try {
        const { name,  age, year,classname } = req.body;
        const newData = {
            name:name,
            classname:classname,
            age:age,
            year:year
        }
            
            
       const result =  await TodoModel.create(newData);
        res.status(200).send(result)
        

    } catch (error) {
        console.error(err);
    
        
    }
   
}
const FetchTodo = async(req,res)=>{
try {
    const result  = await TodoModel.find();
    res.send(result);


    
} catch (error) {
    console.log(error)
    
}
    
}
const UpdateTodo = (req,res)=>{
    res.send("Todo Updated Successfully")
}
const DeleteTodo = (req,res)=>{
    res.send("Todo Deleted Successfully")
}

export {AddTodo,DeleteTodo,UpdateTodo,FetchTodo}
