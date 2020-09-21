import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import authRouter from './routes/auth';

const app = express();

// JWT config
app.set('jwtSecret', process.env.JWT_SECRET);
app.set('jwtExpiresIn', process.env.JWT_EXPIRES_IN);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Set routes
app.use('/auth', authRouter);

export default app;
