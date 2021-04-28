import {Request, Response, NextFunction} from 'express'
import Todo from '../models/todo';

/**
 * @description Get all todos
 * @route GET /api/v1/todos
 * @access Public 
 */
export const getTodos = async (_req: Request, res: Response, _next: NextFunction) => {
	try {
		const todos = await Todo.find();
		return res.status(200).json({
			success: true,
			count: todos.length,
			data: todos
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server error`
		});
	}
};


/**
 * @description Add a todo 
 * @route POST /api/v1/todo
 * @access Public 
 */
export const addTodo = async (req: Request, res: Response, _next: NextFunction) => {
	try {
		const { text, body } = req.body;
		const todo = await Todo.create(req.body);

		return res.status(201).json({
			success: true,
			data: todo
		});
	} catch (error) {
		if ((error.name = 'ValidationError')) {
			const messages = Object.values(error.errrs).map((value: any) => value.message);
			console.log('error', error);
			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false,
				error: `Error ${error.message}`
			});
		}
	}
};


/**
 * @description Delete todo by id 
 * @route Delete /api/v1/todo/:id
 * @access Public 
 */
 export const deleteTodo = async (req: Request, res: Response, _next: NextFunction) => {
	const { id } = req.params;
	try {
		const todo = await Todo.findById(id);
		if (!todo) {
			return res.status(404).json({
				success: false,
				error: `No todo found`
			});
		}

		await todo.remove();
		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Error ${error.message}`
		});
	}
};