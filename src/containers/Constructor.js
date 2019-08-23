import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ConstructorFields from '../components/constructor/ConstructorFields';
import ConstructorEditor from '../components/constructor/ConstructorEditor';

const Constructor = props => {
  return (
    <div className="constructor">
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <ConstructorFields />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ConstructorEditor />
          </Grid>
        </Grid>
      </DndProvider>
    </div>
  );
};

Constructor.propTypes = {

};

export default Constructor;