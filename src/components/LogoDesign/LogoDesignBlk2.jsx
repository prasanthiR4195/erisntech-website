import React from "react";
import LogoRightBlks from "./LogoRightBlks";
import icon1 from "../../assets/logodesign/user_centric.png";
import icon2 from "../../assets/logodesign/effective.png";
import icon3 from "../../assets/logodesign/interdesciplinary.png";
import icon4 from "../../assets/logodesign/business_thinking.png";
import Fade from 'react-reveal/Fade';

const LogoDesignBlk2 = () => {
  return (
    <div className="LogoDesignBlk2_cover">
      <div className="LogoDesignBlk2_left">
      <Fade bottom>
        <div className="LogoDesignBlk2_left_inner">
          <h2>Why Most Business Leaders Choose Agency Partner</h2>
          <p>
            We appreciate that you have a choice when it comes to partnering
            with a digital agency. 8 of 10 Business Leaders Prefer Agency
            Partner
          </p>
        </div> 
        </Fade>
      </div>
      <div className="LogoDesignBlk2_right">
      <Fade bottom>
        <LogoRightBlks
          img={icon1}
          head="User-Centric Approach"
          para="When working on startup MVPs, we focus on your end-users’ needs and expectations, not just the specification. Continuous user testing and feedback implementation guar- antee a product your users actually want."
        />
      </Fade>
      <Fade bottom>
        <LogoRightBlks
          img={icon2}
          head="Effective Communication"
          para="When working on startup MVPs, we focus on your end-users’ needs and expectations, not just the specification. Continuous user testing and feedback implementation guar- antee a product your users actually want."
        />
        </Fade>
        <Fade bottom>
        <LogoRightBlks
          img={icon3}
          head="Interdisciplinary Experience"
          para="When working on startup MVPs, we focus on your end-users’ needs and expectations, not just the specification. Continuous user testing and feedback implementation guar- antee a product your users actually want."
        />
        </Fade>
        <Fade bottom>
        <LogoRightBlks
          img={icon4}
          head="Business Thinking"
          para="When working on startup MVPs, we focus on your end-users’ needs and expectations, not just the specification. Continuous user testing and feedback implementation guar- antee a product your users actually want."
        />
        </Fade>
      </div>
    </div>
  );
};

export default LogoDesignBlk2;
