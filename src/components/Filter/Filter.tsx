import { Button } from "antd";
import { DropMenus } from "./DropMenus";
import "./Filter.css";
import { Spans } from "./Spans";
import { catagories, comparison, spans } from "./catagories";
import { useLocation } from "react-router-dom";

export function Filter() {
  const location = useLocation();
  const route = location.pathname;

  return (
    <div
      className="filter-container"
      style={{ width: 1200, marginLeft: "20px", display: "flex", alignItems: "center" }}
    >
      {route !== "/benchmark"
        ? catagories.map((item) => <DropMenus item={item} />)
        : comparison.map((item) => <DropMenus item={item} />)}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "350px",
        }}
      >
        {spans.map((item) => (
          <Spans item={item} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          size="middle"
          style={{
            backgroundColor: "#fffff0",
            color: "#0e0e2b",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
}
