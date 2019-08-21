import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { CREATE, HOME } from './constants/router';

import Main from './components/Main';
import CreateForm from './components/CreateForm';

const Routes = props => {
  return (
    <Switch>
      <Route path={HOME} exact component={Main} />
      <Route path={CREATE} exact component={CreateForm} />
    </Switch>
  );
};

Routes.propTypes = {
  
};

export default Routes;