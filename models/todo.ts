import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [ true, 'A title is required' ]
	},
	dueDate: {
		type: Date,
		required: [ true, 'Please select a due date' ]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model('Todo', TodoSchema);
