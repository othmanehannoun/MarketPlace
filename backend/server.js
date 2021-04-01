const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('./database/config');

const server = express();

//routes
var indexRouter = require('./routes/index');
var userRouter = require('./routes/User');
var productRouter = require('./routes/Product');


server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));


server.use('/', indexRouter);
server.use('/user', userRouter);
server.use('/products', productRouter);


// error handler
server.use((req,res,next)=>{
  res.status(404).send('Sorry Dont find this route');
  
});

const PORT = process.env.PORT || 4000
server.listen(PORT,()=>{
 console.log(`Server listen this Port ${PORT}`);
});

module.exports = server
