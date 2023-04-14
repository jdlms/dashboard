import { useState } from "react";
import { Filter } from "../components/Filter/Filter";
import { AspectButton } from "../components/AspectButton";
import { RadarChart } from "../components/RadarChart/RadarChart";
import { ComparisonReviews } from "../components/Reviews/ComparisonReviews";

export function Benchmark() {
  const [displayReviews, setDisplayReviews] = useState(false);

  return (
    <div>
      <Filter />
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <h2 style={{ color: "#0e0e2b", display: "inline" }}>Benchmark comparison analysis : BBQ</h2>
        <AspectButton displayReviews={displayReviews} setDisplayReviews={setDisplayReviews} />
      </div>
      {!displayReviews ? <RadarChart /> : <ComparisonReviews />}
    </div>
  );
}
