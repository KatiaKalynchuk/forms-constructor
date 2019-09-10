import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import uuidv1 from 'uuid/v1';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ActionButton } from '../components/Buttons';
import { CREATE } from '../constants/router';
import { formsSelector } from '../selectors/forms';
import FormItem from '../components/FormItem';

const Main = ({ toCreate, forms }) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Fragment>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Fields Number</TableCell>
              <TableCell align="right">Users</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map(id => (
              <FormItem id={id} />
            ))}
          </TableBody>
        </Table>
      </Paper>

      <ActionButton onClick={toCreate} />
    </Fragment>
  );
};

Main.propTypes = {

};

const mapStateToProps = state => ({
  forms: formsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  toCreate: () => {
    const id = uuidv1();
    dispatch(push(`${CREATE}/${id}`))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);