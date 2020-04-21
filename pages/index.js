import { useContext } from "react";
import Link from "next/link";
import { UserLocationContext } from "../components/user-location";
import styles from "./index.module.css";

export default function Home() {
  let location = useContext(UserLocationContext);
  return (
    <div>
      <div>
        hi, my friend from {location && location.display}! Looking for
        something?
      </div>
      <div className={styles.tileContainer}>
        <Tile id="4bf58dd8d48988d1e0931735" title="Coffee Shop" />
        <Tile id="4bf58dd8d48988d113951735" title="Gas Station" />
        <Tile id="4c38df4de52ce0d596b336e1" title="Parking" />
        <Tile id="4bf58dd8d48988d118951735" title="Grocery" />
      </div>
    </div>
  );
}

function Tile({ title, id }) {
  return (
    <div className={styles.tile}>
      <Link href={`/categories/${id}?title=${encodeURIComponent(title)}`}>
        <a>{title}</a>
      </Link>
    </div>
  );
}
