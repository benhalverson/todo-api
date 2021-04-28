import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		// const connect = await mongoose.connect(process.env.MONGO_URI, {
		//   useNewUrlParser: true,
		//   useCreateIndex: true,
		//   useUnifiedTopology: true
		// });
		const connect = await mongoose.connect(
			'mongodb+srv://ben:Dt_Y*#HNniw7LxM@cluster0.otngj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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
