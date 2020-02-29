import axios from "axios";
import "../env";
const URL =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
const key = process.env.KEY;

export const movieDetail = async code => {
  const {
    data: {
      movieInfoResult: { movieInfo }
    }
  } = await axios.get(URL, {
    params: {
      key,
      movieCd: code
    }
  });
  return movieInfo;
};
