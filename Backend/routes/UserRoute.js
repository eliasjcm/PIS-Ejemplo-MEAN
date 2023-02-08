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
userRoute.route("/user/read/:username").get((req, res) => {
  UserModel.findOne({ username: req.params.username }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = userRoute;
