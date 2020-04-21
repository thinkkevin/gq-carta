export function venueLocation(location, currentLocation) {
  const sameCountry =
    !!currentLocation && currentLocation.country == location.country;
  const sameState = sameCountry && currentLocation.state == location.state;
  const sameCity = sameState && currentLocation.city == location.city;

  return formalize({
    address: location.address,
    city: sameCity ? "" : location.city,
    state: sameState ? "" : location.state,
    country: sameCountry ? "" : location.country,
  });
}

export function formalize({ address = "Unknown", city, state, country }) {
  let result = address.replace(/,$/, "");
  if (city) {
    result += ", " + city;
  }
  if (state) {
    result += ", " + state;
  }
  if (country) {
    result += ", " + country;
  }
  return result;
}
