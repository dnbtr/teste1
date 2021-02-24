import express from 'express';

const router = require('./router');
const cors = require('cors')
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

export default app;
