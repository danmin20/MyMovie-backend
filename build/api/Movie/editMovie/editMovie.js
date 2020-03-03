"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DELETE = "DELETE";
var EDIT = "EDIT";
var _default = {
  Mutation: {
    editMovie: function () {
      var _editMovie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, sentiment, rate, action, user, movie;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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