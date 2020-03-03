"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.generateSecret = void 0;

require("./env");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateSecret = function generateSecret() {
  var num = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  return num.toString();
};

exports.generateSecret = generateSecret;

var sendMail = function sendMail(email) {
  var options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  var client = _nodemailer["default"].createTransport((0, _nodemailerSendgridTransport["default"])(options));

  return client.sendMail(email);
};

var sendSecretMail = function sendSecretMail(address, secret) {
  var email = {
    from: "mymovie@gmail.com",
    to: address,
    subject: "마이무비 로그인",
    html: "\uC2DC\uD06C\uB9BF \uD0A4\uB294 <strong>".concat(secret, "</strong> \uC785\uB2C8\uB2E4.<br/>\uC704\uC758 \uB2E4\uC12F \uC790\uB9AC \uC22B\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694!")
  };
  return sendMail(email);
};

exports.sendSecretMail = sendSecretMail;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;