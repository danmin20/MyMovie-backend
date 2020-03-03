"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieDetail = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("../env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
var key = process.env.KEY;

var movieDetail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(code) {
    var _ref2, movieInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL, {
              params: {
                key: key,
                movieCd: code
              }
            });

          case 2:
            _ref2 = _context.sent;
            movieInfo = _ref2.data.movieInfoResult.movieInfo;
            return _context.abrupt("return", movieInfo);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function movieDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.movieDetail = movieDetail;