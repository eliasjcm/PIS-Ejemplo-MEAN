const express = require("express");
const app = express();
const userRoute = express.Router();
// UserModel model
let UserModel = require("../models/UserModel");

// Add User
userRoute.route("/user/create").post((req, res, next) => {
  UserModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Check if user exists
userRoute.route("/user/check/:username").get((req, res) => {
  UserModel.exists({ username: req.params.username }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

// Get User
userRoute.route("/user/getUser/:username").get((req, res) => {
  UserModel.findOne({ username: req.params.username }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Login User
userRoute.route("/user/login").get((req, res) => {
  UserModel.findOne({ username: req.query.username, password:req.query.password }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = userRoute;
