import React, { useState } from "react";
import "./Tab.css";
import CommonHeading from "../commonHeading/CommonHeading";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"; 
import PropTypes from "prop-types"; 

// import product1 from "../../assets/homepage/product-1.png";
// import product2 from "../../assets/homepage/product-2.png";
// import product3 from "../../assets/homepage/product-3.png";
// import product4 from "../../assets/homepage/product-4.png";
import Slider from "../Slider/Slider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const Tabsection2 = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tab_section_wrap">
      <CommonHeading
        subHeadwithBg="OUR WORKS"
        mainB1="We have done lot of Business latest"
        mainR=" case studies"
      />

      <div className="tab_inner">
        <AppBar position="static" style={{ width: "60%", margin: "auto" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Websites" {...a11yProps(0)} />
            <Tab label="Mobile Applications" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Slider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Slider />
        </TabPanel>
      </div>
    </div>
  );
};

export default Tabsection2;
