import express from 'express';
import TodoRouter from './routes/Todo.js';
import connectDatabase from './config/db.js';


const app = express();

const port  = 4000;
connectDatabase();
app.use(express.json());
app.use('/Todo',TodoRouter)


app.listen(port,()=>{
    console.log(`App is listen on the ${port} port`)

})