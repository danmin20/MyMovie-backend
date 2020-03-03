"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _movieList = require("../../apiFunc/movieList");

var _movieDetail2 = require("../../apiFunc/movieDetail");

var _boxofficeWeek2 = require("../../apiFunc/boxofficeWeek");

var _boxofficeDay2 = require("../../apiFunc/boxofficeDay");

var _naverMovie2 = require("../../apiFunc/naverMovie");

var resolvers = {
  Query: {
    movieNm: function movieNm(_, _ref) {
      var name = _ref.name;
      return (0, _movieList.moviesName)(name);
    },
    movieDirNm: function movieDirNm(_, _ref2) {
      var name = _ref2.name;
      return (0, _movieList.moviesDirector)(name);
    },
    movieDetail: function movieDetail(_, _ref3) {
      var code = _ref3.code;
      return (0, _movieDetail2.movieDetail)(code);
    },
    boxofficeDay: function boxofficeDay(_, _ref4) {
      var date = _ref4.date;
      return (0, _boxofficeDay2.boxofficeDay)(date);
    },
    boxofficeWeek: function boxofficeWeek(_, _ref5) {
      var date = _ref5.date,
          week = _ref5.week;
      return (0, _boxofficeWeek2.boxofficeWeek)(date, week);
    },
    naverMovie: function naverMovie(_, _ref6) {
      var term = _ref6.term,
          start = _ref6.start;
      return (0, _naverMovie2.naverMovie)(term, start);
    }
  }
};
exports.resolvers = resolvers;