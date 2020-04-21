import fetch from "isomorphic-unfetch";
import qs from "qs";
import { getVersion } from "jest";
import format from "date-fns/format";
import add from "date-fns/add";
const FS_ID = process.env.FS_ID;
const FS_SEC = process.env.FS_SEC;

export default (req, res) => {
  res.statusCode = 200;
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("ip address", ip);
  let { term, category, ll } = req.query;
  let url =
    "https://api.foursquare.com/v2/venues/search?" +
    qs.stringify({
      client_id: FS_ID,
      client_secret: FS_SEC,
      query: term,
      ll,
      categoryId: category,
      v: format(add(new Date(), { month: 1 }), "yyyyMMdd"),
    });
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => res.json(data));
};
