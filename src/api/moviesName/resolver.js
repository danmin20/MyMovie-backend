import { moviesName } from "../../getMovies";

export const resolvers = {
  Query: {
    movieNm: (_, { name }) => moviesName(name)
  }
};
