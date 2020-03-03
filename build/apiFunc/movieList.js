"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moviesDirector = exports.moviesName = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("../env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";
var key = process.env.KEY;

var moviesName = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
    var _ref2, movieList;

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name) {
    var _ref4, movieList;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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