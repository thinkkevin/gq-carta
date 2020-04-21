import { useRouter } from "next/router";

import { HighLightContext } from "../components/high-light";
import SmartVenueList from "../containers/smart-venue-list";

export default function Search() {
  const router = useRouter();
  let query = router.query || { test: 1 };
  if (query.term) {
    query = { term: query.term };
  }
  if (!query.term) return null;
  return (
    <HighLightContext.Provider value={query.term}>
      <h2>
        Search results about{" "}
        <em style={{ fontWeight: "bold" }}>{query.term}</em>:
      </h2>
      <SmartVenueList term={query.term} />
    </HighLightContext.Provider>
  );
}
