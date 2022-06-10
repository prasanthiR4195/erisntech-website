import React from "react";
import LeftHeading from "../Left_heading/Left-Heading";
import Team from "./Team";
import "./Teams.css";
import head1 from '../../assets/about/person1.png'
import head2 from '../../assets/about/person2.png'
import head3 from '../../assets/about/person3.png'
import team from '../../assets/about/team.png'

const Teams = () => {
  return (
    <div className="team_section_wrap">
      <div className="team_section_one">
        <div className="team_left">
          <LeftHeading
            subHead="Company Family"
            main="Professional work team in their field"
          />
          <p>
            Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
            nonumy eirmod tempor of invidunt ut ipsum dolor sit amet, consetetur
            of a sadip scing elitr, sed diam nonumy fro all aeirmod tempor Lorem
            ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
            nonumy eirmod tempor of invidunt ut ipsum dolor sit amet, consetetur
            of a sadip scing elitr, sed diam nonumy fro all aeirmod tempor
          </p>
        </div>
        <div className="team_right">
          <div className="team_right_one">
            <div className="team_block_one">
              <img src={head1} alt="team" />
              <h4 className="sub-heading">Syed Zahid Ali</h4>
              <p>Chairman</p>
            </div>
          </div>
          <div className="team_right_two">
            <div className="team_block_one">
              <img src={head2} alt="team " />
              <h4 className="sub-heading">Syeeda Fathima Amreen</h4>
              <p>Managing Director</p>
            </div>
            <div className="team_block_one">
              <img src={head3} alt="team " />
              <h4 className="sub-heading">Vajid Shaikh</h4>
              <p>Vice President</p>
            </div>
          </div>
        </div> 
      </div>
      <div className="team_section_two">
        <div className="team_section_two_head">
          <h2>Teams</h2>
          <p>
            Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam
            nonumy eirmod tempor of invidunt ut ipsum dolor sit amet, consetetur
            of a sadip scing elitr, sed diam nonumy fro all aeirmod tempor Lorem
            ipsum dolor in sit amet, consetetursadip scing elitr,
          </p>
        </div>
        <div className="team_section_two_body">
          <Team img={team} name="Nandini Hulsurkar" desig="Project Manager" />
          <Team img={team} name="Pallavi S Rao " desig="Human Resource " />
          <Team img={team} name="Velashri " desig="Accounts Executive " />
          <Team img={team} name="Shivakumar B S " desig="Software Developer " />
          <Team img={team} name="Thamaraiselvan " desig="Software Developer " />
          <Team
            img={team}
            name="Shankar P Manchal "
            desig="Software Developer "
          />
       
          <Team img={team} name="Vinu Subhash" desig=" App Developer" />
          <Team img={team} name="Ritesh Kumar" desig="Android Developer" />
          <Team img={team} name="Mymoon Jaleel" desig=" Flutter Developer" />
          <Team img={team} name="Kalpesh Khandla" desig=" Flutter Developer" />
          <Team img={team} name="Prasanthi R" desig="Front End Developer" />
          <Team img={team} name="Sunil Kumar S" desig="Web Developer" />
          <Team img={team} name="Anjum Taj" desig="Software Tester" />
          <Team img={team} name="Avinas" desig="UX Designer" />
          <Team img={team} name="Monish Surisetty" desig="UX Designer" />
          <Team img={team} name="Harshitha" desig="UX Designer" />
          <Team img={team} name="Lalith Sudhakar" desig="SEO Analyst" />
           
          <Team
            img={team}
            name="Jayaprakash"
            desig="Business Development Executive"
          />
           <Team
            img={team}
            name="Kalki Umapathy"
            desig="Business Development Executive"
          />
          <Team
            img={team}
            name="Mohammed Yousuff"
            desig=" Business Development Intern"
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
