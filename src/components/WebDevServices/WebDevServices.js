import React from 'react';
import './WebDevServices.css'
import LeftBlock from '../BlockSection/LeftBlock';

import icon1 from '../../assets/webdev/img1.png'
import icon2 from '../../assets/webdev/img2.png'
import icon3 from '../../assets/webdev/img3.png'
import icon4 from '../../assets/webdev/img4.png'
import icon5 from '../../assets/webdev/img5.png'
import icon6 from '../../assets/webdev/img6.png'
import icon7 from '../../assets/webdev/img7.png'
import icon8 from '../../assets/webdev/img8.png'
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'



const WebDevServices = () => {
  return (
    <div className="web_dev_services_wrap">
        <div className="web_dev_services_top">
          <div className="web_dev_head">
            <h5 className="subheadwithbg">OUR SERVICES</h5>
            <h3>
            Website Development services we are providing
            </h3>
          </div>
          <p>
            Our clients can expect a wide range of benefits and solutions at our
            web development company, powered by top-trade technologies and
            processes. We deliver dedicated services in various digital formats,
            with noticeable benefits for clients regarding their customer base
            and revenue growth.
          </p>
        </div>
        <div className="web_dev_block_wrap">
          <LeftBlock
            img={icon1}
            title="Custom Website Development"
            color={color1}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon2}
            title="E-Commerce Website Development"
            num="2"
            color={color2}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon3}
            title="Software Development"
            num="3"
            color={color4}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon4}
            title="WordPress Website Development"
            num="4"
            color={color3}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon5}
            title="WooCommerce Website Development"
            num="5"
            color={color4}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon6}
            title="Web Design UI & UX Design"
            color={color5}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon7}
            title="PHP Web Development"
            num="6"
            color={color1}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
          <LeftBlock
            img={icon8}
            title="QA & Testing Services"
            num="7"
            color={color2}
            desc="Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website develop- pment with customizable features."
          />
        </div>
      </div>
  )
}

export default WebDevServices