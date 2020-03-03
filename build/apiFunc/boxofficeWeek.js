"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxofficeWeek = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("../env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
var key = process.env.KEY;

var boxofficeWeek = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date, week) {
    var _ref2, dailyBoxOfficeList;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL, {
              params: {
                key: key,
                targetDt: date,
                weekGb: week
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

  return function boxofficeWeek(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.boxofficeWeek = boxofficeWeek;