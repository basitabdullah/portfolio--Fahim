import React from "react";
import data from "../assets/file.json";
const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((x, i) => (
          <TimeLineItem
            heading={x.title}
            text={x.date}
            index={i}
            key={x.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimeLineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default TimeLine;
