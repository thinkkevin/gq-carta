import SmartVenueList from "../../containers/smart-venue-list";
import { useRouter } from "next/router";

export default function CategoryPage(props) {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div>
      <div>{router.query.title}</div>
      <SmartVenueList category={pid} />
    </div>
  );
}
