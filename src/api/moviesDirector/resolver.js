import { moviesDirector } from "../../getMovies";

export const resolvers = {
  Query: {
    movieDirNm: (_, { name }) => moviesDirector(name)
  }
};
