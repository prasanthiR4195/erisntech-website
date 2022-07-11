import React from "react";
import woo from '../../assets/ecommerce/woocommerce.png'
import php from '../../assets/ecommerce/php.png'
import icon1 from '../../assets/ecommerce/icon1.png'
import icon2 from '../../assets/ecommerce/icon2.png'
import icon3 from '../../assets/ecommerce/icon3.png'
import icon4 from '../../assets/ecommerce/icon4.png'

import icon5 from '../../assets/ecommerce/icon5.png'
import icon6 from '../../assets/ecommerce/icon6.png'
import icon7 from '../../assets/ecommerce/icon1.png'
import icon8 from '../../assets/ecommerce/icon2.png'

import CommonHeading from "../commonHeading/CommonHeading";

const EcommerceBlk1 = () => {
  return (
    <div className="EcommerceBlk1_cover">
      <CommonHeading mainB1="Our eCommerce Website Development Services" />
      <p className="EcommerceBlk1_para">We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
      <div className="EcommerceBlk1_inner">
        <div className="EcommerceBlock">
            <div className="EcommerceBlock_Left">
                <img src={woo} />
                <h4>WooCommerce Ecommerce Development Services</h4>
                <p>The development of e-stores with Woo-Commerce Ecommerce Development Services is beneficial for all kinds of businesses with out of the box functionality.</p>
            </div>
            <div className="EcommerceBlock_Right">
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#E3163D'}}>
                        <img src={icon1}/>
                    </div> 
                    <h5>WooCommerce Theme Creation</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#4E81EE'}}>
                        <img src={icon2}/>
                    </div> 
                    <h5>PSD To WooCommerce Web Conversion</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#F5C228'}}>
                        <img src={icon3}/>
                    </div> 
                    <h5>WooCommerce Theme Creation</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#63BC6F'}}>
                        <img src={icon4}/>
                    </div> 
                    <h5>PSD To WooCommerce Web Conversion</h5>
                </div>
            </div>
        </div>

        <div className="EcommerceBlock">
           
            <div className="EcommerceBlock_Right">
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#598695'}}>
                        <img src={icon5}/>
                    </div> 
                    <h5>Content Management Capabilities</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#EE934E'}}>
                        <img src={icon6}/>
                    </div> 
                    <h5>Shipping API Integrations</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#E3163D'}}>
                        <img src={icon7}/>
                    </div> 
                    <h5>Multiple Payment Options</h5>
                </div>
                <div className="Ecommerce_icon_blk">
                    <div className="EcommerceIcon_wrap" style={{background:'#4E81EE'}}>
                        <img src={icon8}/>
                    </div> 
                    <h5>Search Engine Optimized</h5>
                </div>
            </div>
            <div className="EcommerceBlock_Left">
                <img src={php} />
                <h4>PHP - CI Ecommerce Development</h4>
                <p>We combine our eCommerce expertise with CI skill for e-commerce development by using a flexible PHP-based framework.</p>
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default EcommerceBlk1;
