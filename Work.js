import "./WorkCardStyles.css";

import WorkCard from "./WorkCard";
import WorkardData from './WorkCardData' 

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {
            WorkardData.map((val, ind)=>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgscr}
                    title={val.title}
                    text={val.Text}
                    view={val.view}
                    />
                )
            })
        }

      </div>
    </div>
  );
};

export default Work;
