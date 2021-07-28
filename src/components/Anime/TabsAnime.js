import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Tabs, Tab, useMediaQuery } from "@material-ui/core/";
import { SummaryAnime } from "./SummaryAnime/SummaryAnime";
import { EpisodesAnime } from "./EpisodesAnime/EpisodesAnime";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    transition: "padding-left .3s ease-in-out",
    [theme.breakpoints.between(1280, 1464)]: {
      transition: "padding-left .3s ease-in-out ",
      paddingLeft: theme.spacing(25),
    },
  },
  textSelected: {
    color: theme.palette.primary.main + " !important",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <> {children}</>}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export const TabsAnime = ({ animeData, included }) => {
  const [value, setValue] = React.useState(0);
  const [episodes, setEpisodes] = useState(false);
  const scrollableTabs = useMediaQuery("(min-width:500px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="inherit"
        variant={scrollableTabs ? "standard" : "scrollable"}
        centered={scrollableTabs}
        scrollButtons="on"
        aria-label="scrollable auto tabs example"
      >
        <Tab
          classes={{
            selected: classes.textSelected,
          }}
          label="Resumen"
          {...a11yProps(0)}
        />
        <Tab
          classes={{
            selected: classes.textSelected,
          }}
          label="Episodios"
          {...a11yProps(1)}
        />
        <Tab
          classes={{
            selected: classes.textSelected,
          }}
          label="Personajes"
          {...a11yProps(2)}
        />
        <Tab
          classes={{
            selected: classes.textSelected,
          }}
          label="Franquicias"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SummaryAnime animeData={animeData} included={included} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EpisodesAnime
          animeData={animeData}
          episodes={episodes}
          setEpisodes={setEpisodes}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Personajes
      </TabPanel>
      <TabPanel value={value} index={3}>
        Franquicias
      </TabPanel>
    </div>
  );
};
