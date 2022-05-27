import React, { useState } from "react";
import "./Tab.css";
import CommonHeading from "../commonHeading/CommonHeading";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"; 
import PropTypes from "prop-types";
import TabContent from "../TabContent/TabContent";

import product1 from "../../assets/homepage/product-1.png";
import product2 from "../../assets/homepage/product-2.png";
import product3 from "../../assets/homepage/product-3.png";
import product4 from "../../assets/homepage/product-4.png";

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

const Tabsection = () => {
  const [value, setValue] = useState(0); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tab_section_wrap">
     
      <div className="tab_inner">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            initialselectedindex={value}
          >
            <Tab label="School management" {...a11yProps(0)} />
            <Tab label="Digital QR Code" {...a11yProps(1)} />
            <Tab label="Property listing" {...a11yProps(2)} />
            <Tab label="Project Management" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TabContent
            img={product1}
            title="Erisn Classroom"
            desc="A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike."
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabContent
            img={product2}
            title="Erisn Classroom"
            desc="A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike."
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabContent
            img={product3}
            title="Erisn Classroom"
            desc="A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike."
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabContent
            img={product4}
            title="Erisn Classroom"
            desc="A one of its kind, dynamic Learning Management System furnishing incredibly wonderful and distinct features, thereby catering to the various different requirements of school administration, teachers and students alike."
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default Tabsection;
