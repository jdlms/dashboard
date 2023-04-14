import "./Reviews.css";
import { Totals } from "./Totals";
import { Range } from "./Range";

export function Reviews() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ border: "solid 1px #0e0e2b", width: "400px", padding: "15px", margin: "60px" }}>
        <h3 style={{ margin: 0 }}>Reliable Reviews</h3>
        <span style={{ fontSize: "14px" }}>Anti-spam filtered</span>
        <Totals />
        <Range />
      </div>
    </div>
  );
}
