import axios from "axios";
import "../env";
const URL =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const key = process.env.KEY;

export const boxofficeDay = async date => {
  const {
    data: {
      boxOfficeResult: { dailyBoxOfficeList }
    }
  } = await axios.get(URL, {
    params: {
      key,
      targetDt: date
    }
  });
  return dailyBoxOfficeList;
};
