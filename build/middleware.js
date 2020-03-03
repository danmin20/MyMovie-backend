"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = void 0;

var isAuthenticated = function isAuthenticated(request) {
  if (!request.user) {
    throw Error("로그인이 필요합니다");
  }

  return;
};

exports.isAuthenticated = isAuthenticated;