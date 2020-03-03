"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  User: {
    movies: function movies(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.user({
        id: id
      }).movies();
    }
  }
};
exports["default"] = _default;