import React,{useState,useEffect} from 'react'
import '../../containers/UXDev/UXDev.css'
import app1 from "../../assets/UXDev/school_management_app.png";
import appbg from "../../assets/UXDev/school_management_bg.png";
import product1 from "../../assets/homepage/product-3.png";
import product2 from "../../assets/homepage/product-2.png";
import product3 from "../../assets/UXDev/krishak_bazaar_app.jpg";
import { withStyles } from '@material-ui/core/styles'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'; 

const UXDarkTheme = () => { 

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#EB3542',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#EB3542',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  
  const [toggle, setToggle] =useState(true);

  const handleChange = (event) => { 
    setToggle(!event.target.value);
     
    console.log(toggle,"clicked")
   
  };
useEffect((event) => {
  console.log(toggle,"clicked")
  return () => {
    
  }
}, [setToggle ,toggle])

  return (

    <div className={`themechange_cover ${toggle ? "normal_theme" : "dark_theme"}`}>
        <div className='themechange_button'>
            <p>Try Dark mode</p>
            <div className='themechange_toggle'>
            <FormControlLabel
                control={<IOSSwitch checked={toggle} value={toggle} onChange={handleChange} name="checked" />}       
            />
            </div>
        </div>
        <div className='themeChange_top'>
            <div className='theme_change_top_left'>
                <div className='theme_change_top_head'>
                    <h5>Our Recent Work</h5>
                    <h2>School Management Application Design</h2>
                </div>
                <p>Designed to go beyond the traditional norms of academics, the Erisn Classroom intuitively helps the learners and the teachers find common ground. The online learning management software has been preset with tools that aid across several verticals from college faculty to enterprise leaders. It is one suite – ready for creating content, delivering training and measuring progress.</p>
            </div>
            <div className='theme_change_top_right'>
                <img src={app1} className="themeChange_mob_screen"/>
                <img src={appbg} className="themeChange_bg"/>
            </div>
        </div>
        <div className='change_theme_middle'>
            <h2>User Interface Design Services infusing usability</h2>
            <p>Our UI/UX design and development services are focused on creating interfaces that make every digital interaction a delightful user experience.</p>
            <p>We work as an extended UX team for companies and startups, bringing an in-depth understanding of the business, design and technical aspects so as to build digital products with a great user experience that affirms the business goals</p>
        </div>
        <div className='change_theme_bottom'>
            <div className='change_theme_bottom_blk'>
                <img src={product1} className=""/>
                <h4>The One Furniture</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className='change_theme_bottom_blk'>
                <img src={product2} className=""/>
                <h4>Venta</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className='change_theme_bottom_blk'>
                <img src={product3} className=""/>
                <h4>Krishak Bazaar</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
        </div>
    </div>
  )
}

export default UXDarkTheme