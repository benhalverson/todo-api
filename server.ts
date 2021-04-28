import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 4000;
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    'data': 'it works!'
  })
});
 
app.listen(PORT, () => `listening on port ${PORT}`);