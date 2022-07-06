import React from "react";
import CommonHeading from "../commonHeading/CommonHeading";
import WorkBlock from "../WorkIcons/WorkBlock";
import "./WebDevClients.css";

import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png' 

import client1 from '../../assets/webdev/client1.png' 
import client2 from '../../assets/webdev/client2.png' 
import client3 from '../../assets/webdev/client3.png' 

const WebDevClients = () => {
  return (
    <div className="web_dev_clients_wrap"> 
      <CommonHeading mainB1="Why Clients Choose Us?" />
      <div className="web_dev_clients">
        <WorkBlock
          img={client1}
          head="Customer Friendly"
          color={color1}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <WorkBlock
          img={client2}
          head="Team of Experts"
          color={color2}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <WorkBlock
          img={client3}
          head="Quality Assurance"
          color={color3}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </div>
  );
};

export default WebDevClients;
