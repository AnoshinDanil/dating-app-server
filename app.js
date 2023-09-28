var express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser");
var usersRouter = require('./modules/user/user.router');
const errorHandler = require('./modules/utils/errorHandler');
const { signUp } = require('./modules/signUp/signUp.service');
const { authChecker, ads, logger } = require('./modules/utils/midlwares');


var app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
const mongodbParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbName = 'dating-db';
const mon = `mongodb://${'localhost'}:27017/${dbName}`
app.use(bodyParser.json({    parameterLimit: 100000,
  limit: '50mb'}));
app.use(bodyParser.urlencoded({    parameterLimit: 100000,
  limit: '50mb', extended: true }));
app.use(cookieParser());
app.use((req,res,next)=>{
  console.log(req.path  + ": " + new Date())
  console.log(req.body)
  next()
})
app.use(ads)
app.use(authChecker)
app.use(ads)
app.use(logger)
app.use('/user', usersRouter);
app.use('/sign_up', require("./modules/signUp/signUp.router"));
app.use('/card', require("./modules/card/card.router"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  throw new Error('Not found')
});

app.use(errorHandler);

app.listen(4000,()=>{
  console.log(`Listening on ${4000}`)
  mongoose
  .connect(mon, mongodbParams) 
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => console.log(err));
})
