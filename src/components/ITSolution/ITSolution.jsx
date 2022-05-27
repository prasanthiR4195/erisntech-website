import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import "./ITSolution.css";
import { SolutionBlk } from "./SolutionBlk";

export const ITSolution = () => {
  return (
    <div className="solution_outer_wrap">
      <CommonHeading
        mainB1="We provide truly prominent "
        mainR="IT solutions "
        mainB2="  for your success"
      />

      <div className="solution_inner">
        <div className="solution_left">
          <SolutionBlk
            img="assets/homepage/solution-1.png"
            title="Expert Team"
            desc="Accelerate innovation with world-class tech teams"
          />
          <SolutionBlk
            img="assets/homepage/solution-2.png"
            title="Quality Contro"
            desc="Accelerate innovation with world-class tech teams"
          />
          <SolutionBlk
            img="assets/homepage/solution-3.png"
            title="Integration"
            desc="Accelerate innovation with world-class tech teams"
          />
          <SolutionBlk
            img="assets/homepage/solution-4.png"
            title="24/7 Support"
            desc="Accelerate innovation with world-class tech teams"
          />
        </div>
        <div className="solution_right">
          <img src="assets/homepage/home-img.png" alt="home" />
        </div>
      </div>
    </div>
  );
};
