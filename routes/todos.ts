import {Router} from 'express';
 
import {addTodo, deleteTodo, getTodos}from '../controllers/todos';

const router = Router();

router.route('/').get(getTodos).post(addTodo);

router.route('/:id').delete(deleteTodo);

export default router;
