import React from "react";
import Header from "./header";
import Footer from "./footer";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.body}>{children}</section>
      <Footer />
    </div>
  );
}
