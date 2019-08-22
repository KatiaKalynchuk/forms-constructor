import React from 'react';
import PropTypes from 'prop-types';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import FieldItem from './FieldItem';

const ConstructorFields = props => {
  return (
    <div className="constructor-fields">
      <FieldItem text="Input" icon={ListRoundedIcon} />
      <FieldItem text="Chackbox" icon={ListRoundedIcon} />
      <FieldItem text="Radio" icon={ListRoundedIcon} />
    </div>
  );
};

ConstructorFields.propTypes = {
  
};

export default ConstructorFields;