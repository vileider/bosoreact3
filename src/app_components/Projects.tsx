import "./styles/Projects.css";
import "../reusable_styles/BackgroundGlow.css";
import { useState } from "react";

export function Projects() {
  const [traceState, setTraceState] = useState<any>();
  const mouseTraceLog = (x: any) => {
    console.log(x.clientX - x.target.offsetLeft);
  };

  const body = (
    <div className="projectBody">
      <div className="projectTitle">Our Projects</div>
      <div className="projectsSlider">
        {/* <div className="arrow left "></div> */}
        <div
          className="project backgroundGlow"
          // onClick={(event: any) => mouseTraceLog(event)}
          onDrag={(event: any) => {
            setTraceState(event.clientX - event.target.offsetLeft);
            event.target.offsetLeft = traceState;
            mouseTraceLog(event);
          }}
        >
          s{traceState}
        </div>
        <div className="project backgroundGlow"> 2nd</div>
        <div className="project backgroundGlow"> 3rd</div>
        {/* <div className="arrow right"></div> */}
      </div>
    </div>
  );

  return body;
}
