import { useContext } from "react";
import { UserLocationContext } from "../components/user-location";
import { VenueList } from "../components/venue";
import { sanitize } from "../components/utils/sanitize";
import qs from "qs";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

const API_URL = "/api/venues";
async function fetcher(querystring) {
  const res = await fetch(API_URL + "?" + querystring);
  const json = await res.json();
  return json;
}

export default function SmartVenueList({ term, category }) {
  const userLocation = useContext(UserLocationContext);
  let ll;
  if (userLocation && userLocation.latitude && userLocation.longitude) {
    ll = userLocation.latitude + "," + userLocation.longitude;
  }

  let query = { term: sanitize(term), category };
  if (ll) {
    query.ll = ll;
  }

  const { data, error } = useSWR(qs.stringify(query), fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return <VenueList data={data.response.venues} />;
}
