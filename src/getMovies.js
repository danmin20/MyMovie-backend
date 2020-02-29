import axios from "axios";
import "./env";
const URL =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";
const key = process.env.KEY;

export const moviesName = async name => {
  const {
    data: {
      movieListResult: { movieList }
    }
  } = await axios.get(URL, {
    params: {
      key,
      movieNm: name
    }
  });
  console.log(movieList);
  return movieList;
};

export const moviesDirector = async name => {
  const {
    data: {
      movieListResult: { movieList }
    }
  } = await axios.get(URL, {
    params: {
      key,
      directorNm: name
    }
  });
  console.log(movieList);
  return movieList;
};
