import { Progress } from "antd";

export function BoschRange() {
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
        <Progress percent={49} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={13} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={20} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={11} status="active" strokeColor={"#b1dae7"} />
        <Progress percent={7} status="active" strokeColor={"#b1dae7"} />
      </div>
      <div className="review-bar-details">
        <span className="star-number">
          <span className="bold-number">1993</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">521</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">787</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">424</span> Reviews
        </span>
        <span className="star-number">
          <span className="bold-number">304</span> Reviews
        </span>
      </div>
    </div>
  );
}
