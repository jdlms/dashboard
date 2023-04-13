import { Slider } from "antd";
import "./Spans.css";

type SpansItem = {
  title: string;
  rangeBegin: string;
  rangeEnd: string;
};

type SpansProps = {
  item: SpansItem;
};

export function Spans({ item }: SpansProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
      <span style={{ display: "inline", fontWeight: 600, fontSize: "1rem", alignSelf: "center" }}>
        {item.title}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "150px",
          marginTop: "7px",
        }}
      >
        <span style={{ fontSize: ".6rem" }}>{item.rangeBegin}</span>
        <span style={{ fontSize: ".6rem" }}>{item.rangeEnd}</span>
      </div>
      <Slider className="slider" tooltip={{ formatter: null }} />
    </div>
  );
}
