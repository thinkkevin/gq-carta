import useSWR from "swr";

export function useIPLocation() {
  const { data, error } = useSWR("check", ip_fetcher);
  return {
    error,
    ...data,
  };
}

const IP_API_URL = "http://api.ipstack.com/check";

async function ip_fetcher() {
  const res = await fetch(
    IP_API_URL + "?access_key=" + process.env.IPSTACK_KEY
  );
  const json = await res.json();
  return {
    city: json.city,
    state: json.region_code,
    latitude: json.latitude,
    longitude: json.longitude,
    country: json.country_name,
    display: `${json.city}, ${json.region_code}`,
  };
}
