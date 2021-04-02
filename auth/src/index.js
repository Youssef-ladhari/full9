var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");


var app = express();
app.set("secretkey", "auth");
app.use(cors('*'))
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//routes
var signinRouter = require("./routes/signin");
app.use(signinRouter);
var signupRouter = require("./routes/signup");
app.use(signupRouter);
var signoutRouter = require("./routes/signout");
app.use(signoutRouter);
var resetpasswordRouter =require("./routes/ResetPassword");
app.use(resetpasswordRouter);
var forgetpasswordRouter =require("./routes/ForgetPassword");
app.use(forgetpasswordRouter);
var errorHandler = require("./middlewares/error-handler");
app.use(errorHandler);

//base
const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth_DB", {
      seUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};
start();

/* 
app.post('/api/users/sam',(req,res)=>{
const {name}=req.body
res.send(name)
}); */
