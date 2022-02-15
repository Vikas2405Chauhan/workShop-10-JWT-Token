const express = require('express');
const app = express();
const authRoute = require('./routes/auth'); //Import Routes
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT ,
 () => console.log('connected to db!')
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('server up and running'));