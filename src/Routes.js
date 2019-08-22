import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { CREATE, HOME } from './constants/router';

import Main from './containers/Main';
import Constructor from './containers/Constructor';


const Routes = props => {
  return (
    <Switch>
      <Route path={HOME} exact component={Main} />
      <Route path={CREATE} exact component={Constructor} />
    </Switch>
  );
};

Routes.propTypes = {
  
};

export default Routes;