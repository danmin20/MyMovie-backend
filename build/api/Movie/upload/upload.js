"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    upload: function () {
      var _upload = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, user, sentiment, movieNm, img, rate, movie;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                sentiment = args.sentiment, movieNm = args.movieNm, img = args.img, rate = args.rate;
                _context.next = 6;
                return _prismaClient.prisma.createMovie({
                  sentiment: sentiment,
                  movieNm: movieNm,
                  img: img,
                  rate: rate,
                  user: {
                    connect: {
                      id: user.id
                    }
                  }
                });

              case 6:
                movie = _context.sent;
                return _context.abrupt("return", movie);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function upload(_x, _x2, _x3) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
  }
};
exports["default"] = _default;