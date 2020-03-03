"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieDetail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require("../env");

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
var key = process.env.KEY;

var movieDetail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(code) {
    var _ref2, movieInfo;

    return _regenerator["default"].wrap(function _callee$(_context) {
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