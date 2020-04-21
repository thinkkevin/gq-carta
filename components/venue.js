import React, { useContext } from "react";
import Link from "next/link";
import { venueUrl } from "./utils/url";
import { venueLocation } from "./utils/location";
import { UserLocationContext } from "./user-location";
import HighLightText from "./high-light";

import venueStyle from "./venue.module.css";

export function VenueItem(props) {
  let userLocation = useContext(UserLocationContext);

  return (
    <div className={venueStyle.item}>
      <div className={venueStyle.name}>
        <Link href={`${venueUrl(props)}`}>
          <a>
            <HighLightText value={props.name} />
          </a>
        </Link>
      </div>
      <div className={venueStyle.address}>
        {venueLocation(props.location, userLocation)}
      </div>
    </div>
  );
}

export function VenueList({ data = [] }) {
  return (
    <div className={venueStyle.list}>
      {data.map((venue) => {
        return <VenueItem key={venue.id} {...venue} />;
      })}
    </div>
  );
}
