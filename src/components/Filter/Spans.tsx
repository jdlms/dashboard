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
    <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
      <span style={{ display: "inline", fontWeight: 600, fontSize: "12px", alignSelf: "center" }}>
        {item.title}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100px",
          // marginTop: "12px",
        }}
      >
        <span style={{ fontSize: "9px" }}>{item.rangeBegin}</span>
        <span style={{ fontSize: "9px" }}>{item.rangeEnd}</span>
      </div>
      <Slider className="slider" tooltip={{ formatter: null }} />
    </div>
  );
}
