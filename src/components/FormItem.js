import React from 'react';
import PropTypes from 'prop-types';
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";
import { idFormsInfoSelector } from '../selectors/formsInfo';
import connect from 'react-redux/es/connect/connect';
import { fieldsNumberSelectorFactory } from '../reducers/editor';

const FormItem = ({ id, form, fieldsNumber }) => {
  console.log('formId',form);
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
       {form.name}
      </TableCell>
      <TableCell align="right">{fieldsNumber}</TableCell>
      <TableCell align="right">{form.users}</TableCell>
    </TableRow>
  );
};

FormItem.propTypes = {

};

const mapStateToProps = (state, { id }) => ({
  form: idFormsInfoSelector(id)(state),
  fieldsNumber: fieldsNumberSelectorFactory(id)(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormItem);
