import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router";
import pageA from "../pages/pageA";
import pageB from "../pages/pageB";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    tab:{
      color: "#388e3c",
      backgroundColor: "#81c784"
    }
  }),
);

interface LinkTabProps {
  label: string;
  url: string;
}

// const LinkTab = (props: LinkTabProps) => <Tab {...props} />;


const Header: React.FunctionComponent<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
    console.log(event);
    // console.log(url[newValue]);
    // eslint-disable-next-line no-restricted-globals
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
            <Tab label={<span style={{ color: 'black', fontFamily:'museo500' }}>Black Label</span>} to="/"  className={classes.tab} component={Link} />
            <Tab label="Item Two" to="/pageA" className={classes.tab}  component={Link} />
            <Tab label="Item Three" to="/pageB" className={classes.tab}  component={Link} />

        </Tabs>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
