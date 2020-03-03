"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxofficeDay = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require("../env");

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
var key = process.env.KEY;

var boxofficeDay = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(date) {
    var _ref2, dailyBoxOfficeList;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL, {
              params: {
                key: key,
                targetDt: date
              }
            });

          case 2:
            _ref2 = _context.sent;
            dailyBoxOfficeList = _ref2.data.boxOfficeResult.dailyBoxOfficeList;
            return _context.abrupt("return", dailyBoxOfficeList);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function boxofficeDay(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.boxofficeDay = boxofficeDay;