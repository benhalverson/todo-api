import * as mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(
			'mongodb://mongodb/todos',
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true
			}
		);
		console.log(`MongoDB ${connect.connection.host}`);
	} catch (error) {
		await console.error(`Error ${error.message}`);
	}
};

export default connectDB;
