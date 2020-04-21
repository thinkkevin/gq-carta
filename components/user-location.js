/**
 * Create a high level Current Location ContextProvider
 * Will try to ask for user's location, and fallback to
 * IP based location detection
 */

import React from "react";
import { usePosition } from "use-position";
import { useIPLocation } from "./hooks/use-ip-location";

export const UserLocationContext = React.createContext({});

export function UserLocation(props) {
  const { latitude, longitude, error } = usePosition(false);

  return (
    <UserLocationContext.Provider
      value={{ latitude, longitude, error, display: "Current Location" }}
    >
      {props.children}
    </UserLocationContext.Provider>
  );
}

export function IPLocation(props) {
  let {
    latitude,
    longitude,
    display,
    city,
    state,
    country,
    error,
  } = useIPLocation();

  if (error) {
    return props.children;
  } else {
    return (
      <UserLocationContext.Provider
        value={{ latitude, longitude, display, city, state, country }}
      >
        {props.children}
      </UserLocationContext.Provider>
    );
  }
}
export default function CurrentLocation(props) {
  return (
    <UserLocation>
      <UserLocationContext.Consumer>
        {(userLocation) => {
          if (userLocation && userLocation.error != null) {
            return <IPLocation>{props.children}</IPLocation>;
          } else {
            return props.children;
          }
        }}
      </UserLocationContext.Consumer>
    </UserLocation>
  );
}
