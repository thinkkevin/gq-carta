import "./styles.css";

import Layout from "../components/layout";
import CurrentLocation from "../components/user-location";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CurrentLocation>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentLocation>
  );
}
