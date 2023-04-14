import express from 'express'
import { AddTodo, DeleteTodo, FetchTodo, UpdateTodo } from '../controllers/Todo.js';

const TodoRouter = express.Router();

TodoRouter.get('/',FetchTodo);
TodoRouter.get('/:id',);
TodoRouter.post('/',AddTodo);
TodoRouter.patch('/:id',UpdateTodo);
TodoRouter.delete('/:id',DeleteTodo);

export default TodoRouter;

