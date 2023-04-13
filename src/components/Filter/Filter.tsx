import { Button } from "antd";
import { DropMenus } from "./DropMenus";
import "./Filter.css";
import { Spans } from "./Spans";
import { catagories, spans } from "./catagories";

console.log(catagories);

export function Filter() {
  return (
    <div className="filter-container">
      {catagories.map((item) => (
        <DropMenus item={item} />
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "400px",
          paddingLeft: "10px",
          borderLeft: "solid 1px black",

          paddingRight: "10px",
          borderRight: "solid 1px black",
        }}
      >
        {spans.map((item) => (
          <Spans item={item} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button size="small">Clear filters</Button>
      </div>
    </div>
  );
}
