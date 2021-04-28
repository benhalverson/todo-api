import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';;
import todos from './routes/todos';
import connectDb from './config/db';
dotenv.config({path: './config/.env'})
connectDb();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dve'));
}

app.use(morgan('combined'));

app.use('/api/v1/todos', todos);

app.get('/', (req, res) => {
  res.json({
    'data': 'it works!'
  })
});
 
app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} listening on port ${PORT}`);
});