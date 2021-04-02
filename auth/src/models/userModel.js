const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

function password(String) {
  var phoneno = /^[A-Za-z0-9]\w{4,14}$/;
  if (phoneno.test(String)) {
    return true;
  } else {
    console.log("invalid password");
    return false;
  }
}
function name(String) {
  var phoneno = /^[A-Za-z]\w{4,14}$/;
  if (phoneno.test(String)) {
    return true;
  } else {
    console.log("invalid name");
    return false;
  }
}
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required",
      validate: [name, "Please fill a valid name"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: "password is required",
      validate: [password, "Please fill a valid password"],
    },
    resetLink: {
      type: String,
      //required: false
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
module.exports = mongoose.model("clients", userSchema); //export local
