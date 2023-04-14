import { BoschReviews } from "./BoschReviews";
import { WeberReviews } from "./WeberReviews";

export function ComparisonReviews() {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <WeberReviews />
      <BoschReviews />
    </div>
  );
}
