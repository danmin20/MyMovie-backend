"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../../utils");

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    confirmSecret: function () {
      var _confirmSecret = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args) {
        var email, secret, user, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = args.email, secret = args.secret;
                _context.next = 3;
                return _prismaClient.prisma.user({
                  email: email
                });

              case 3:
                user = _context.sent;

                if (!(user.loginSecret === secret)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return _prismaClient.prisma.updateUser({
                  where: {
                    id: user.id
                  },
                  data: {
                    loginSecret: ""
                  }
                });

              case 7:
                token = (0, _utils.generateToken)(user.id);
                return _context.abrupt("return", token);

              case 11:
                throw Error("잘못된 이메일 또는 시크릿 키");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function confirmSecret(_x, _x2) {
        return _confirmSecret.apply(this, arguments);
      }

      return confirmSecret;
    }()
  }
};
exports["default"] = _default;