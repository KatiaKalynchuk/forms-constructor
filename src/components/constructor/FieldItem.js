import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDrag } from 'react-dnd'
import { addField } from '../../reducers/editor';
import { fields } from '../../constants/fields';
import { idRoutSelector } from '../../selectors/router';


const FieldItem = ({ text, icon: Icon, type }) => {
  const dispatch = useDispatch();
  const formId = useSelector(state => idRoutSelector(state));

  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'field', text, id: type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end({ id }, monitor) {
      id && dispatch(addField({ formId, field: fields[id] }));
      // const dropResult = monitor.getDropResult();
      // // console.log(dropResult);
      //
      // if (item && dropResult) {
      //   let alertMessage = ''
      //   const isDropAllowed =
      //     dropResult.allowedDropEffect === 'any' ||
      //     dropResult.allowedDropEffect === dropResult.dropEffect
      //
      //   console.log(dropResult.dropEffect);
      //   if (isDropAllowed) {
      //     const isCopyAction = dropResult.dropEffect === 'copy'
      //
      //     const actionName = isCopyAction ? 'copied' : 'moved'
      //     alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
      //   } else {
      //     alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
      //   }
      //   alert(alertMessage)
      // }
    },
  });

  return (
    <div ref={dragRef} style={{ opacity }} className="field-item">
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