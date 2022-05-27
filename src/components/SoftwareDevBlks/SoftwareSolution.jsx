import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import SwBlocks from "./SwBlocks";
import solution1 from "../../assets/webdev/solution1.png";
import solution2 from "../../assets/webdev/solution2.png";
import solution3 from "../../assets/webdev/solution3.png";
import solution4 from "../../assets/webdev/solution4.png";
import './SoftwareSolution.css'
 
const SoftwareSolution = () => {
  return (
    <div className="softwareSolution_cover">
      <CommonHeading mainB1="Custom Software Solutions" />
      <p className="softwareSolution_para">
      Boost your existing development team to complete a project or create a new software application from the start with ErisnTech.
      </p>

      <div className="software_solution_inner">
        <SwBlocks
          img={solution1}
          num="1"
          head="Customer Relationship Management Solutions"
          para="Our software developers and software engineers build custom CRM solutions and the use of Cloud services for managing a large variety, not just those related to customers."
        />
        <SwBlocks
          img={solution2}
          num="2"
          head="Enterprise Resource Planning (ERP) Solutions"
          para="Our software developers and software engineers build custom CRM solutions and the use of Cloud services for managing a large variety, not just those related to customers."
        />
        <SwBlocks
          img={solution3}
          num="3"
          head="Point-of-Sale/ Payment Processing Solutions"
          para="Our software developers and software engineers build custom CRM solutions and the use of Cloud services for managing a large variety, not just those related to customers."
        />
        <SwBlocks
          img={solution4}
          num="4"
          head="AI & IoT-Connectivity Solutions"
          para="Our software developers and software engineers build custom CRM solutions and the use of Cloud services for managing a large variety, not just those related to customers."
        />
      </div>
    </div>
  );
};

export default SoftwareSolution;
