import { useState } from "react";
import { Filter } from "../components/Filter/Filter";
import { WeberReviews } from "../components/Reviews/WeberReviews";
import { Rating } from "../components/Rating/Rating";
import { AspectButton } from "../components/AspectButton";

export function AspectScores() {
  const [displayReviews, setDisplayReviews] = useState(false);

  return (
    <div>
      <Filter />
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <h2 style={{ color: "#0e0e2b", display: "inline" }}>Aspect-based scoring : BBQ</h2>
        <AspectButton displayReviews={displayReviews} setDisplayReviews={setDisplayReviews} />
      </div>
      {!displayReviews ? <Rating /> : <WeberReviews />}
    </div>
  );
}
