const clientModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
var refreshTokens = {};
module.exports = {
  createUser: function (req, res) {
    clientModel.create(req.body, function (err, user) {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "error add user" + err, status: 500, data: null });
      } else {
        res
          .status(200)
          .json({ message: " user added", status: 200, data: user });
      }
    });
  },
  authentificate: function (req, res, next) {
    clientModel
      .findOne({
        email: req.body.email,
      })
      .exec(function (err, userInfo) {
        console.log("user", userInfo);
        if (err) {
          next(err);
        } else {
          if (userInfo != null) {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
              // /  var refreshToken = randtoken.uid(256)
              const token = jwt.sign(
                {
                  user: userInfo,
                  id: userInfo._id,
                },
                req.app.get("secretkey"),
                { expiresIn: "30m" }
              );
              const refreshToken = jwt.sign(
                {
                  id: userInfo._id,
                },
                req.app.get("secretkey"),
                { expiresIn: "50m" }
              );
              refreshTokens[refreshToken] = userInfo._id;
              res.json({
                status: 'success',
                message: "user found!!!",
                data: {
                  user: userInfo,
                  accesstoken: token,
                  refreshToken: refreshToken,
                },
              });
            } else {
              res.json({
                status: 402,
                message: "Invalid password!!!",
                data: null,
              });
            }
          } else {
            res.json({ status: 402, message: "user not found!!!", data: null });
          }
        }
      });
  },
  refreshToken: function (req, res) {
    var id = req.body.id;
    var refreshToken = req.body.refreshToken;
    console.log("id", id);
    console.log("refreshTokens", refreshTokens[refreshToken] == id);
    console.log("refresh", refreshToken in refreshTokens);
    if (refreshToken in refreshTokens && refreshTokens[refreshToken] == id) {
      var token = jwt.sign(
        {
          id: id,
        },
        req.app.get("secretkey"),
        { expiresIn: "5m" }
      );
      var refreshToken = jwt.sign({ id }, req.app.get("secretkey"), {
        expiresIn: "1d",
      });
      res.json({ accesstoken: token, refreshToken: refreshToken });
    } else {
      res.sendStatus(401).json({});
      //res.status(401).json({message:''})
    }
  },
  logout: function (req, res) {
    var refreshToken = req.body.refreshToken;
    console.log("refreshToken", refreshTokens);
    jwt.verify(req.headers["x-access-token"], req.app.get("secretkey"));
    if (refreshToken in refreshTokens) {
      delete refreshTokens[refreshToken];
    }
    res.json({ msg: "token expired", status: 204 });
  },

  forgotpassword: function (req, res) {
    const { email } = req.body;
    console.log("bodyyyyyyy", email);
    clientModel.findOne({ email }, (err, user) => {
      console.log('userrrrrr',user);
      if (err || !user) {
        return res.json({ error: "email does not exist" });
      }
      const token = jwt.sign({ _id: user._id }, req.app.get("secretkey"), {
        expiresIn: "10m",
      });
      var data = {
        from: "sportify.no.reply@gmail.com",
        to: email,
        subject: "activation email",
        text: "to reset your password click on the link below",
        html: `<p>https:sport.dev/api/clients/resetpassword/${token}</p>`,
      };
      return clientModel.updateOne({ resetLink: token }, (err, succes) => {
        if (err) {
          return res.json({ error: "reset password link error" });
        } else {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "sportify.no.reply@gmail.com",
              pass: "Samir123456",
            },
          });
          transporter.sendMail(data, function (error, info) {
            if (error) {
              console.log("error", error);
              return res.json({ err: "error",message: "email can't been sent" });
            } else {
              return res.json({ message: "email has been sent", token: token });
            }
          });
        }
      });
    });
  },
  resetpassword: function (req, res) {
    const { resetLink, newPass } = req.body;
    console.log("loggg", req.body);
    if (resetLink) {
      jwt.verify(
        resetLink,
        req.app.get("secretkey"),
        function (err, decodeData) {
          if (err) {
            return res.json({
              error: "incorrect token or it is exprired",
            });
          }
          clientModel.findOne({ resetLink }, (err, user) => {
            if (err || !user) {
              return res.json({ error: "user with this token does not exist" });
            }
            const obj = {
              password: newPass,
            };
            console.log("userrrr", user);
            //user=_extend(user,obj);
            user.password = obj.password;
            user.save((err, result) => {
              if (err) {
                return res.status(400).json({ error: "reset password error" });
              } else {
                return res
                  .status(200)
                  .json({ message: "password has been changed" });
              }
            });
          });
        }
      );
    } else {
      return res.status(401).json({ error: "authentification erreur" });
    }
  },
};
