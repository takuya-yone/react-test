import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './component/Header';
import { BrowserRouter, Route ,Link} from "react-router-dom";
import pageA from "./page/pageA";
import pageB from "./page/pageB";
// import { , withRouter } from "react-router-dom";


// import Header from './components/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="React Test!!"/>

      <BrowserRouter>
      <Link to="/pageA">pageA</Link>
      <Link to="/pageB">pageB</Link>
      <Route path="/pageA" component={pageA}></Route> 
      <Route path="/pageB" component={pageB}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
