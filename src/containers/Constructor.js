import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import { push } from 'connected-react-router'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ConstructorFields from '../components/constructor/ConstructorFields';
import ConstructorEditor from '../components/constructor/ConstructorEditor';
import { addForm } from "../reducers/forms";
import { HOME } from "../constants/router";
import { idRouteSelector } from '../selectors/router';

const Constructor = ({ handleSave }) => {
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

      <footer className="footer">
        <Fab className="btn-save" variant="extended" color="primary" aria-label="add" onClick={handleSave}>
          <SaveTwoToneIcon />
          Save
        </Fab>
      </footer>
    </div>
  );
};

Constructor.propTypes = {

};

const mapStateToProps = state => ({
  idRoute: idRouteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  save: (id) => {
    dispatch(addForm(id));
    dispatch(push(HOME))
  }
});

const mergeProps = ({ idRoute }, { save }) => ({
  handleSave: () => save(idRoute),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Constructor);