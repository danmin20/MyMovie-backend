import { moviesName, moviesDirector } from "../../apiFunc/movieList";
import { movieDetail } from "../../apiFunc/movieDetail";
import { boxofficeWeek } from "../../apiFunc/boxofficeWeek";
import { boxofficeDay } from "../../apiFunc/boxofficeDay";
import { naverMovie } from "../../apiFunc/naverMovie";

export const resolvers = {
  Query: {
    movieNm: (_, { name }) => moviesName(name),
    movieDirNm: (_, { name }) => moviesDirector(name),
    movieDetail: (_, { code }) => movieDetail(code),
    boxofficeDay: (_, { date }) => boxofficeDay(date),
    boxofficeWeek: (_, { date, week }) => boxofficeWeek(date, week),
    naverMovie: (_, { term }) => naverMovie(term)
  }
};
