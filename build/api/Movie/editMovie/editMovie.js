"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var DELETE = "DELETE";
var EDIT = "EDIT";
var _default = {
  Mutation: {
    editMovie: function () {
      var _editMovie = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, sentiment, rate, action, user, movie;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id, sentiment = args.sentiment, rate = args.rate, action = args.action;
                user = request.user;
                _context.next = 6;
                return _prismaClient.prisma.$exists.movie({
                  id: id,
                  user: {
                    id: user.id
                  }
                });

              case 6:
                movie = _context.sent;

                if (!movie) {
                  _context.next = 16;
                  break;
                }

                if (!(action === EDIT)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.updateMovie({
                  data: {
                    sentiment: sentiment,
                    rate: rate
                  },
                  where: {
                    id: id
                  }
                }));

              case 12:
                if (!(action === DELETE)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.deleteMovie({
                  id: id
                }));

              case 14:
                _context.next = 17;
                break;

              case 16:
                throw Error("오류발생");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editMovie(_x, _x2, _x3) {
        return _editMovie.apply(this, arguments);
      }

      return editMovie;
    }()
  }
};
exports["default"] = _default;