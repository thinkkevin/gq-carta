import Search from "./search";
import Link from "next/link";

import styles from "./header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a>
          <h1>Home</h1>
        </a>
      </Link>
      <Search />
    </header>
  );
}
