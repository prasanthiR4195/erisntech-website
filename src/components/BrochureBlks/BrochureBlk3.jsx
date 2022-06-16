import React from 'react'
import "../../containers/BrochureDesign/BrochureDesign.css";
import CommonHeading from '../commonHeading/CommonHeading'
import color1 from '../../assets/webdev/color1.png'
import color2 from '../../assets/webdev/color2.png'
import color3 from '../../assets/webdev/color3.png'
import color4 from '../../assets/webdev/color4.png'
import color5 from '../../assets/webdev/color5.png'

import brochure1 from '../../assets/brochure/bi_fold_brochure.png'  
import brochure2 from '../../assets/brochure/tri_fold_brochure.png'  
import brochure3 from '../../assets/brochure/gate_fold_brochure.png'  
import brochure4 from '../../assets/brochure/z_fold_brochure.png'  
import brochure5 from '../../assets/brochure/four_panel_roll_fold.png'  
import brochure6 from '../../assets/brochure/insert_and_folder_brochure.png'  

import WorkBlock from '../WorkIcons/WorkBlock';

const BrochureBlk3 = () => {
  return (
    <div className='BrochureBlk3_cover'>
         <CommonHeading 
            mainB1="Various Types of Brochure Designs"
        />
        <p className='BrochureBlk3_para'>Lorem ipsum dolor in sit amet, consetetursadip scing elitr, sed diam nonumy eirmod temporod</p>
        <div className='BrochureBlk3_inner'>
            <WorkBlock
                img={brochure1}
                head="Bi-Fold Brochures"
                color={color1}
                para="Bi-fold brochures have 2 folds (4 panels). It is similar to a booklet and are fairly inexpe- nsive to print."
            />
             <WorkBlock
                img={brochure2}
                head="Tri-Fold Brochures"
                color={color2}
                para="As the name implies, these brochures have 3 folds (6 panels) and offer more space to present any information."
            />
             <WorkBlock
                img={brochure3}
                head="Gate Fold Brochures"
                color={color3}
                para="These brochures are inward folding like a gate on one big panel and are primarily used in high-end marketing campaigns."
            />
             <WorkBlock
                img={brochure4}
                head="Z-Fold Brochure"
                color={color4}
                para="These brochures fold into a ‘Z’ pattern and are ideal for impressing readers through a stylish and unique appearance."
            />
             <WorkBlock
                img={brochure5}
                head="Four panel Roll Fold"
                color={color5}
                para="Commonly used for step-by-step instructi- ons or for educational material, this is a layout that folds in on itself."
            />
             <WorkBlock
                img={brochure6}
                head="Insert and Folder Brochures"
                color={color1}
                para="Also known as pocket or folder brochures, these have spaces inside them where relevant product inserts can be put."
            />
        </div>
    </div>
  )
}

export default BrochureBlk3