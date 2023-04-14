import { Progress } from "antd";

export function WeberRange() {
  return (
    <div className="review-stars-wrapper" style={{ display: "flex", flexDirection: "row" }}>
      <div className="review-bar-wrapper">
        <span className="star-number">5/5</span>
        <span className="star-number">4/5</span>
        <span className="star-number">3/5</span>
        <span className="star-number">2/5</span>
        <span className="star-number">1/5</span>
      </div>
      <div style={{ width: "250px" }}>
        <Progress percent={84} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={10} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={4} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={1} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={1} status="active" strokeColor={"#b1dae7"} />
      </div>
      <div className="review-bar-details">
        <span className="star-number">
          <span className="bold-number">4135</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">636</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">729</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">320</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">281</span> Reviews
        </span>
      </div>
    </div>
  );
}
