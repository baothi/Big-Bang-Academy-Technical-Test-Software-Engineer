const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require("cors");
const morgan = require('morgan');

const port = process.env.PORT || 8080;
const userRouter = require('./routes/userRoute');

app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
  // Allow access request from any computers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});