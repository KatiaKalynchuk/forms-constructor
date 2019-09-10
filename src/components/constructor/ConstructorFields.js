import React from 'react';
import PropTypes from 'prop-types';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import FieldItem from './FieldItem';

const ConstructorFields = props => {
  return (
    <div className="constructor-fields">
      <FieldItem text="Input" icon={ListRoundedIcon} type="input" />
      <FieldItem text="Chackbox" icon={ListRoundedIcon} type="checkbox" />
      <FieldItem text="Radio" icon={ListRoundedIcon} type="radio" />
    </div>
  );
};

ConstructorFields.propTypes = {
  
};

export default ConstructorFields;