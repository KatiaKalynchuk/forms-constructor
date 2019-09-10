import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import { idRouteSelector } from "../../selectors/router";
import { fieldsSelectorFactory } from "../../reducers/editor";
import factoryComponents from './factoryComponents';

const getBorder = isActive => isActive ? '5px dashed #1e374c' : '';

const ConstructorEditor = props => {
  const formId = useSelector(state => idRouteSelector(state));
  const fieldsSelector = fieldsSelectorFactory(formId);
  const fieldList = useSelector(state => fieldsSelector(state));

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'field',
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  const border = getBorder(isActive);

  return (
    <div ref={drop} style={{ border }} className="constructor-editor">
      <FormControl fullWidth>
        {fieldList.map((field) => {
          const Component = factoryComponents[field.$typeof];

          return Component ? <Component { ...field }/> : null;
        })}
      </FormControl>
    </div>
  );
};

ConstructorEditor.propTypes = {

};

export default ConstructorEditor;