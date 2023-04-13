import { Menu } from "./Menu";
import { Settings } from "./Settings";

export function Nav() {
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "#fffff0", fontSize: "30px", display: "inline", marginBottom: "10px" }}>
          ReQiew
        </h2>
        <span
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "12px",
            color: "#fffff0",
          }}
        >
          Pro
        </span>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}
