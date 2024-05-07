import React from "react";
import data from "../assets/file.json";
const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((x, i) => (
          <TimeLineItem heading={x.title} url={x.url} index={i} key={x.title} date={x.date} />
        ))}
      </div>
    </div>
  );
};

const TimeLineItem = ({ heading, url, index,date }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <a href={url}>Link : {url}</a>
      <h6>{date}</h6>
    </div>
  </div>
);

export default TimeLine;
