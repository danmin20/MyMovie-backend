"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moviesDirector = exports.moviesName = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require("../env");

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";
var key = process.env.KEY;

var moviesName = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name) {
    var _ref2, movieList;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL, {
              params: {
                key: key,
                movieNm: name
              }
            });

          case 2:
            _ref2 = _context.sent;
            movieList = _ref2.data.movieListResult.movieList;
            return _context.abrupt("return", movieList);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function moviesName(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.moviesName = moviesName;

var moviesDirector = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
    var _ref4, movieList;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios["default"].get(URL, {
              params: {
                key: key,
                directorNm: name
              }
            });

          case 2:
            _ref4 = _context2.sent;
            movieList = _ref4.data.movieListResult.movieList;
            return _context2.abrupt("return", movieList);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function moviesDirector(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.moviesDirector = moviesDirector;