import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const FieldItem = ({ text, icon: Icon }) => {
  return (
    <div className="field-item">
      <ListItemIcon>
        <Icon color="secondary" style={{ fontSize: 30 }} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </div>
  );
};

FieldItem.propTypes = {

};

export default FieldItem;